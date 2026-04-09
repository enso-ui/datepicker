<template>
    <datepicker
        :locale="lang"
        alt-input
        :alt-format="format"
        :time="time"/>
</template>

<script>
import { getActivePinia } from 'pinia';
import Datepicker from './Datepicker.vue';

const useStore = id => {
    const store = getActivePinia()?._s?.get(id);

    if (!store) {
        throw new Error(`Missing Pinia store: ${id}`);
    }

    return store;
};

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
            return useStore('app').meta;
        },
        lang() {
            return useStore('preferences').global.lang;
        },
        format() {
            return this.altFormat
                ?? (this.time ? this.meta.dateTimeFormat : this.meta.dateFormat);
        },
    },
};
</script>
