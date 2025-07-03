import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'

import { MediaType } from '@/types/media'
import { ItemType } from '@/types/movie-result'
import { CARD_VARIANT } from '@/lib/motion-variants'
import {
  dateFormatter,
  getPosterImageURL,
  itemRedirect,
  numberRounder,
} from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { BlurredImage } from '@/components/blurred-image'

interface CardProps {
  item: MediaType
  itemType?: ItemType
  isTruncateOverview?: boolean
}

export const Card = ({
  item,
  itemType = 'movie',
  isTruncateOverview = true,
}: CardProps) => {
  const href = `${itemRedirect(itemType)}/${item.id}`;
  
  return (
    <div className="group flex flex-col">
      <motion.div
        variants={CARD_VARIANT}
        whileHover="hover"
        className="relative mb-2 overflow-hidden rounded-lg"
      >
        <div className="relative">
          <Link href={href} legacyBehavior passHref>
            <a>
              <BlurredImage
                src={getPosterImageURL(item.poster_path)}
                alt={item.title || item.name || ''}
                width={500}
                height={750}
                className="aspect-[2/3] h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
              />
            </a>
          </Link>
        </div>
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-background/80 px-1 py-0.5 text-xs font-bold backdrop-blur-sm">
          <span>{numberRounder(item.vote_average)}</span>
          <span className="text-yellow-400">★</span>
        </div>
      </motion.div>

      <div className="flex flex-col gap-2">
        <h2 className="line-clamp-1 text-sm font-bold">
          <Link href={href} legacyBehavior passHref>
            <a>{item.title || item.name}</a>
          </Link>
        </h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {itemType === 'movie' ? 'Movie' : 'TV Show'}
          </Badge>
          {item.release_date && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <CalendarDays className="h-3 w-3" />
              <span>{dateFormatter(item.release_date)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
