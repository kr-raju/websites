'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Event } from '@/lib/types/event';
import { EditEventDialog } from './edit-event-dialog';
import { DeleteEventDialog } from './delete-event-dialog';

interface EventActionsProps {
  event: Event;
  onDelete: (id: string) => void;
  onUpdate: (event: Event) => void;
}

export function EventActions({ event, onDelete, onUpdate }: EventActionsProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { toast } = useToast();

  const handleDelete = async () => {
    try {
      await onDelete(event.id);
      setIsDeleteOpen(false);
      toast({
        title: 'Success',
        description: 'Event deleted successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete event',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-x-2">
      <EditEventDialog
        event={event}
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        onUpdate={onUpdate}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsEditOpen(true)}
      >
        <Pencil className="h-4 w-4" />
      </Button>
      <DeleteEventDialog
        open={isDeleteOpen}
        onOpenChange={setIsDeleteOpen}
        onConfirm={handleDelete}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDeleteOpen(true)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}