import { describe, expect, it, vi } from 'vitest';

vi.mock('@enso-ui/ui/src/pinia/app', () => ({
    app: () => ({
        meta: {
            dateFormat: 'd.m.Y',
            dateTimeFormat: 'd.m.Y H:i',
        },
    }),
}));

vi.mock('@enso-ui/ui/src/pinia/preferences', () => ({
    preferences: () => ({
        global: {
            lang: 'ro',
        },
    }),
}));

import EnsoDatepicker from '../src/bulma/EnsoDatepicker.vue';

describe('EnsoDatepicker', () => {
    it('derives formats directly from app store meta', () => {
        const format = EnsoDatepicker.computed.format.call({
            altFormat: null,
            time: true,
        });

        expect(format).toBe('d.m.Y H:i');
    });
});
