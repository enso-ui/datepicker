<template>
    <div class="control"
        :class="{ 'has-icons-left has-icons-right': !readonly }">
        <core-datepicker v-bind="$attrs"
            :readonly="readonly"
            ref="coreDatepicker">
            <template #default="{ timeOnly, clearButton, clearEvents, inputBindings}">
                <input class="input"
                    :class="[
                        { 'is-danger': isDanger },
                        { 'is-warning': isWarning },
                        { 'is-success': isSuccess },
                        { 'is-small': isSmall }]"
                    v-bind="inputBindings"
                    type="text"
                    :placeholder="placeholder">
                <span class="icon is-small is-left"
                    v-if="!readonly">
                    <fa :icon="faClock"
                        v-if="timeOnly"/>
                    <fa :icon="faCalendarDays"
                        v-else/>
                </span>
                <span class="icon is-small is-right clear-button"
                    v-on="clearEvents"
                    v-if="clearButton">
                    <a class="delete is-small"/>
                </span>
            </template>
        </core-datepicker>
    </div>
</template>

<script>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { faClock, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import CoreDatepicker from '../renderless/CoreDatepicker.vue';

export default {
    name: 'Datepicker',

    components: { Fa, CoreDatepicker },

    data: () => ({
        faCalendarDays,
        faClock,
    }),

    props: {
        isDanger: {
            type: Boolean,
            default: false,
        },
        isSmall: {
            type: Boolean,
            default: false,
        },
        isWarning: {
            type: Boolean,
            default: false,
        },
        isSuccess: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: 'Select Date',
        },
        readonly: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        clear() {
            this.$refs.coreDatepicker.clear();
        },
    },
};
</script>
