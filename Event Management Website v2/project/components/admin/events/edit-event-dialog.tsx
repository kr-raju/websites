'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { EventForm } from '@/components/events/event-form';
import { Event } from '@/lib/types/event';

interface EditEventDialogProps {
  event: Event;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: (event: Event) => void;
}

export function EditEventDialog({
  event,
  open,
  onOpenChange,
  onUpdate,
}: EditEventDialogProps) {
  const handleSuccess = (updatedEvent: Event) => {
    onUpdate(updatedEvent);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
        </DialogHeader>
        <EventForm
          initialData={event}
          onSuccess={() => handleSuccess(event)}
        />
      </DialogContent>
    </Dialog>
  );
}