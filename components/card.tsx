import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'

import { MediaType } from '@/types/media'
import { ItemType } from '@/types/movie-result'
import {
  dateFormatter,
  getPosterImageURL,
  itemRedirect,
  numberRounder,
} from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

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
    <div>
      <div className="relative mb-2 overflow-hidden rounded-lg">
        <Link href={href}>
          <Image
            src={getPosterImageURL(item.poster_path)}
            alt={item.title || item.name || ''}
            width={500}
            height={750}
            className="aspect-[2/3] h-full w-full object-cover"
          />
        </Link>
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-background/80 px-1 py-0.5 text-xs font-bold backdrop-blur-sm">
          <span>{numberRounder(item.vote_average)}</span>
          <span className="text-yellow-400">★</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="line-clamp-1 text-sm font-bold">
          <Link href={href}>
            {item.title || item.name}
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
