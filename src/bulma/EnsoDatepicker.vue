<template>
    <datepicker
        :locale="lang"
        alt-input
        :alt-format="format"
        :time="time"/>
</template>

<script>
import { app as useApp } from '@enso-ui/ui/src/pinia/app';
import { preferences as usePreferences } from '@enso-ui/ui/src/pinia/preferences';
import Datepicker from './Datepicker.vue';

export default {
    name: 'EnsoDatepicker',

    components: { Datepicker },

    props: {
        altFormat: {
            type: String,
            default: null,
        },
        time: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        meta() {
            return useApp().meta;
        },
        lang() {
            return usePreferences().global.lang;
        },
        format() {
            return this.altFormat
                ?? (this.time ? this.meta.dateTimeFormat : this.meta.dateFormat);
        },
    },
};
</script>
