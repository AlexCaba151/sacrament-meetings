'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import type { SacramentMeeting } from '@/lib/types';
import {
  updateMeetingAction,
  type State,
} from '@/lib/actions';

interface EditMeetingFormProps {
  meeting: SacramentMeeting;
}

const initialState: State = {
  message: null,
  errors: {},
};

function FieldError({
  id,
  errors,
}: {
  id: string;
  errors?: string[];
}) {
  return (
    <div
      id={id}
      aria-live="polite"
      className="mt-1 text-sm text-red-600"
    >
      {errors?.map((error) => (
        <p key={error}>{error}</p>
      ))}
    </div>
  );
}

export default function EditMeetingForm({
  meeting,
}: EditMeetingFormProps) {
  const updateAction = updateMeetingAction.bind(null, meeting.id);

  const [state, formAction, isPending] = useActionState(
    updateAction,
    initialState
  );

  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <div className="mb-8">
        <Link
          href={`/meetings/${meeting.id}`}
          className="text-sm font-medium text-[#294C73] hover:underline"
        >
          ← Back to meeting
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-[#172033]">
          Edit Meeting
        </h1>
      </div>

      {state.message && (
        <div
          aria-live="polite"
          className="mb-6 border border-red-300 bg-red-50 p-4 text-red-700"
        >
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-8">
        <section className="border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Meeting Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium"
              >
                Date
              </label>

              <input
                id="date"
                name="date"
                type="date"
                defaultValue={meeting.date}
                aria-describedby="date-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="date-error"
                errors={state.errors?.date}
              />
            </div>

            <div>
              <label
                htmlFor="meetingType"
                className="block text-sm font-medium"
              >
                Meeting Type
              </label>

              <select
                id="meetingType"
                name="meetingType"
                defaultValue={meeting.meetingType}
                aria-describedby="meetingType-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              >
                <option value="regular">
                  Regular Sacrament Meeting
                </option>
                <option value="testimony">
                  Testimony Meeting
                </option>
                <option value="stake">
                  Stake Meeting
                </option>
                <option value="general">
                  General Meeting
                </option>
              </select>

              <FieldError
                id="meetingType-error"
                errors={state.errors?.meetingType}
              />
            </div>

            <div>
              <label
                htmlFor="presiding"
                className="block text-sm font-medium"
              >
                Presiding
              </label>

              <input
                id="presiding"
                name="presiding"
                type="text"
                defaultValue={meeting.presiding}
                aria-describedby="presiding-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="presiding-error"
                errors={state.errors?.presiding}
              />
            </div>

            <div>
              <label
                htmlFor="conducting"
                className="block text-sm font-medium"
              >
                Conducting
              </label>

              <input
                id="conducting"
                name="conducting"
                type="text"
                defaultValue={meeting.conducting}
                aria-describedby="conducting-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="conducting-error"
                errors={state.errors?.conducting}
              />
            </div>
          </div>
        </section>

        <section className="border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Prayers
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="openingPrayer"
                className="block text-sm font-medium"
              >
                Opening Prayer
              </label>

              <input
                id="openingPrayer"
                name="openingPrayer"
                type="text"
                defaultValue={meeting.openingPrayer}
                aria-describedby="openingPrayer-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="openingPrayer-error"
                errors={state.errors?.openingPrayer}
              />
            </div>

            <div>
              <label
                htmlFor="closingPrayer"
                className="block text-sm font-medium"
              >
                Closing Prayer
              </label>

              <input
                id="closingPrayer"
                name="closingPrayer"
                type="text"
                defaultValue={meeting.closingPrayer}
                aria-describedby="closingPrayer-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="closingPrayer-error"
                errors={state.errors?.closingPrayer}
              />
            </div>
          </div>
        </section>

        <section className="border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Opening Hymn
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="openingHymnNumber"
                className="block text-sm font-medium"
              >
                Hymn Number
              </label>

              <input
                id="openingHymnNumber"
                name="openingHymnNumber"
                type="number"
                min="1"
                defaultValue={meeting.openingHymn.number}
                aria-describedby="openingHymnNumber-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="openingHymnNumber-error"
                errors={state.errors?.openingHymnNumber}
              />
            </div>

            <div>
              <label
                htmlFor="openingHymnTitle"
                className="block text-sm font-medium"
              >
                Hymn Title
              </label>

              <input
                id="openingHymnTitle"
                name="openingHymnTitle"
                type="text"
                defaultValue={meeting.openingHymn.title}
                aria-describedby="openingHymnTitle-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="openingHymnTitle-error"
                errors={state.errors?.openingHymnTitle}
              />
            </div>
          </div>
        </section>

        <section className="border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Sacrament Hymn
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="sacramentHymnNumber"
                className="block text-sm font-medium"
              >
                Hymn Number
              </label>

              <input
                id="sacramentHymnNumber"
                name="sacramentHymnNumber"
                type="number"
                min="1"
                defaultValue={meeting.sacramentHymn.number}
                aria-describedby="sacramentHymnNumber-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="sacramentHymnNumber-error"
                errors={state.errors?.sacramentHymnNumber}
              />
            </div>

            <div>
              <label
                htmlFor="sacramentHymnTitle"
                className="block text-sm font-medium"
              >
                Hymn Title
              </label>

              <input
                id="sacramentHymnTitle"
                name="sacramentHymnTitle"
                type="text"
                defaultValue={meeting.sacramentHymn.title}
                aria-describedby="sacramentHymnTitle-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="sacramentHymnTitle-error"
                errors={state.errors?.sacramentHymnTitle}
              />
            </div>
          </div>
        </section>

        <section className="border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Closing Hymn
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="closingHymnNumber"
                className="block text-sm font-medium"
              >
                Hymn Number
              </label>

              <input
                id="closingHymnNumber"
                name="closingHymnNumber"
                type="number"
                min="1"
                defaultValue={meeting.closingHymn.number}
                aria-describedby="closingHymnNumber-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="closingHymnNumber-error"
                errors={state.errors?.closingHymnNumber}
              />
            </div>

            <div>
              <label
                htmlFor="closingHymnTitle"
                className="block text-sm font-medium"
              >
                Hymn Title
              </label>

              <input
                id="closingHymnTitle"
                name="closingHymnTitle"
                type="text"
                defaultValue={meeting.closingHymn.title}
                aria-describedby="closingHymnTitle-error"
                className="mt-2 w-full border border-slate-300 px-3 py-2"
              />

              <FieldError
                id="closingHymnTitle-error"
                errors={state.errors?.closingHymnTitle}
              />
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            disabled={isPending}
            className="bg-[#172033] px-6 py-3 font-semibold text-white hover:bg-[#294C73] disabled:opacity-50"
          >
            {isPending ? 'Saving...' : 'Save Changes'}
          </button>

          <Link
            href={`/meetings/${meeting.id}`}
            className="border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}