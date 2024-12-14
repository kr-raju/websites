import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { EventSort } from '@/lib/types/event';
import { eventCategories } from '@/lib/config/events';

interface EventFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: EventSort;
  onSortChange: (sort: EventSort) => void;
}

export function EventFilters({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: EventFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <div className="flex-1 w-full sm:w-auto">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {eventCategories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 w-full sm:w-auto">
        <Select value={sortBy} onValueChange={(value) => onSortChange(value as EventSort)}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="popularity">Popularity</SelectItem>
            <SelectItem value="title">Title</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}