<template>

    <div class="field">
        <div class="control">
            <div class="select is-small">
                <select v-model="value" :value="length" @change="$emit('change-per-page', value)">
                    <option v-for="value in lengths" :value="value" :key="value" :selected="value==length">Show {{ value }}</option>
                </select>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        props: {
            length: {
                default: 10
            },
            lengths: {
                type: Array,
                default: function () {
                    return [10,25,50,100];
                }
            }
        },
        data() {
            return {
                value: this.length,
            }
        },
    }
</script>
