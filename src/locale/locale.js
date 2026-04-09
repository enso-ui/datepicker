import * as ro from 'flatpickr/dist/l10n/ro';
import * as def from 'flatpickr/dist/l10n/default';
import * as de from 'flatpickr/dist/l10n/de';
import * as nl from 'flatpickr/dist/l10n/nl';
import * as fr from 'flatpickr/dist/l10n/fr';
import * as pt from 'flatpickr/dist/l10n/pt';
import * as ar from 'flatpickr/dist/l10n/ar';
import * as mn from 'flatpickr/dist/l10n/mn';
import * as hu from 'flatpickr/dist/l10n/hu';
import * as uk from 'flatpickr/dist/l10n/uk';
import * as es from 'flatpickr/dist/l10n/es';

const pick = (mod, key) => mod?.[key] || mod?.default || mod;

export default {
    ro: pick(ro, 'Romanian'),
    en: pick(def, 'english'),
    de: pick(de, 'German'),
    nl: pick(nl, 'Dutch'),
    fr: pick(fr, 'French'),
    br: pick(pt, 'Portuguese'),
    ar: pick(ar, 'Arabic'),
    mn: pick(mn, 'Mongolian'),
    hu: pick(hu, 'Hungarian'),
    uk: pick(uk, 'Ukrainian'),
    es: pick(es, 'Spanish'),
};
