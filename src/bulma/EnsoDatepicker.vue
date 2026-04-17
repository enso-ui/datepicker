<template>
    <datepicker
        :locale="lang"
        alt-input
        :alt-format="format"
        :time="time"/>
</template>

<script>
import { app } from '@enso-ui/ui/src/pinia/app';
import { preferences } from '@enso-ui/ui/src/pinia/preferences';
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
        lang() {
            return preferences().global.lang;
        },
        format() {
            return this.altFormat
                ?? (this.time ? app().meta.dateTimeFormat : app().meta.dateFormat);
        },
    },
};
</script>
