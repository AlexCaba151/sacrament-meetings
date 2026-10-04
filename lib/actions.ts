'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import {
  addMeeting,
  updateMeeting as updateMeetingDb,
  deleteMeeting as deleteMeetingDb,
} from '@/lib/meetings-db';

const MeetingFormSchema = z.object({
  date: z.string().min(1, 'Date is required.'),
  meetingType: z.enum(['testimony', 'regular', 'stake', 'general'], {
    message: 'Please select a meeting type.',
  }),
  presiding: z
    .string()
    .min(1, 'Presiding name is required.')
    .max(255, 'Presiding name is too long.'),
  conducting: z
    .string()
    .min(1, 'Conducting name is required.')
    .max(255, 'Conducting name is too long.'),
  openingPrayer: z
    .string()
    .min(1, 'Opening prayer is required.')
    .max(255, 'Opening prayer name is too long.'),
  closingPrayer: z
    .string()
    .min(1, 'Closing prayer is required.')
    .max(255, 'Closing prayer name is too long.'),
  openingHymnNumber: z.coerce
    .number()
    .int()
    .positive('Opening hymn number must be positive.'),
  openingHymnTitle: z
    .string()
    .min(1, 'Opening hymn title is required.'),
  sacramentHymnNumber: z.coerce
    .number()
    .int()
    .positive('Sacrament hymn number must be positive.'),
  sacramentHymnTitle: z
    .string()
    .min(1, 'Sacrament hymn title is required.'),
  closingHymnNumber: z.coerce
    .number()
    .int()
    .positive('Closing hymn number must be positive.'),
  closingHymnTitle: z
    .string()
    .min(1, 'Closing hymn title is required.'),
});

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    openingPrayer?: string[];
    closingPrayer?: string[];
    openingHymnNumber?: string[];
    openingHymnTitle?: string[];
    sacramentHymnNumber?: string[];
    sacramentHymnTitle?: string[];
    closingHymnNumber?: string[];
    closingHymnTitle?: string[];
  };
  message?: string | null;
};

const initialMeetingData = {
  announcements: [],
  wardBusiness: [],
  stakeBusiness: false,
  speakers: [],
};

function buildMeetingData(formData: FormData) {
  return {
    date: String(formData.get('date') ?? ''),
    meetingType: String(formData.get('meetingType') ?? '') as
      | 'testimony'
      | 'regular'
      | 'stake'
      | 'general',
    presiding: String(formData.get('presiding') ?? ''),
    conducting: String(formData.get('conducting') ?? ''),
    openingPrayer: String(formData.get('openingPrayer') ?? ''),
    closingPrayer: String(formData.get('closingPrayer') ?? ''),
    openingHymn: {
      number: Number(formData.get('openingHymnNumber') ?? 0),
      title: String(formData.get('openingHymnTitle') ?? ''),
    },
    sacramentHymn: {
      number: Number(formData.get('sacramentHymnNumber') ?? 0),
      title: String(formData.get('sacramentHymnTitle') ?? ''),
    },
    closingHymn: {
      number: Number(formData.get('closingHymnNumber') ?? 0),
      title: String(formData.get('closingHymnTitle') ?? ''),
    },
    ...initialMeetingData,
  };
}

export async function createMeeting(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    openingPrayer: formData.get('openingPrayer'),
    closingPrayer: formData.get('closingPrayer'),
    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),
    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  try {
    await addMeeting(buildMeetingData(formData));
  } catch (error) {
    console.error('Failed to create meeting:', error);
    throw new Error('Unable to create the meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}

export async function updateMeetingAction(
  id: number,
  _prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get('date'),
    meetingType: formData.get('meetingType'),
    presiding: formData.get('presiding'),
    conducting: formData.get('conducting'),
    openingPrayer: formData.get('openingPrayer'),
    closingPrayer: formData.get('closingPrayer'),
    openingHymnNumber: formData.get('openingHymnNumber'),
    openingHymnTitle: formData.get('openingHymnTitle'),
    sacramentHymnNumber: formData.get('sacramentHymnNumber'),
    sacramentHymnTitle: formData.get('sacramentHymnTitle'),
    closingHymnNumber: formData.get('closingHymnNumber'),
    closingHymnTitle: formData.get('closingHymnTitle'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  try {
    const updated = await updateMeetingDb(id, buildMeetingData(formData));

    if (!updated) {
      throw new Error('Meeting not found.');
    }
  } catch (error) {
    console.error('Failed to update meeting:', error);
    throw new Error('Unable to update the meeting.');
  }

  revalidatePath('/meetings');
  revalidatePath(`/meetings/${id}`);
  redirect('/meetings');
}

export async function deleteMeetingAction(
  id: number,
  _formData: FormData
): Promise<void> {
  try {
    const deleted = await deleteMeetingDb(id);

    if (!deleted) {
      throw new Error('Meeting not found.');
    }
  } catch (error) {
    console.error('Failed to delete meeting:', error);
    throw new Error('Unable to delete the meeting.');
  }

  revalidatePath('/meetings');
  redirect('/meetings');
}