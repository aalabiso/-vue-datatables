<template>
    <div id="app">
        <section class="hero is-info is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-12">

                        <div class="card">
                            <div class="card-header">
                                <div class="card-header-title">
                                    My {{ itemType }}
                                </div>
                                <div>
                                    <length-selector style="margin: 10px"></length-selector>
                                </div>
                                <div>
                                    <search style="margin: 10px" :item-type="itemType"></search>
                                </div>
                            </div>
                            <div class="card-content">
                                <div>
                                    <datatable :columns="columns" :items="items" :item-type="itemType" :is-loading="isLoading" ></datatable>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="container">
                                    <pagination v-on:pagination-change-page="changePage"></pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>


    import DatatableMixin from "./mixins/datatable";
    import Search from "./components/Search";
    import Datatable from "./components/Datatable";
    import Pagination from "./components/Pagination";
    import LengthSelector from "./components/LengthSelector";

    export default {
        name: 'app',
        mixins: [
            DatatableMixin
        ],
        components: {
            Search,
            Datatable,
            Pagination,
            LengthSelector
        },
        methods: {},
        mounted() {},
        data() {
            return {
                itemType: 'Chickens',
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }

    .hero.is-info {
        background: linear-gradient(
                rgba(255, 255, 255, 0.5),
                rgba(0, 0, 0, 0.5)
        ), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .card {
        border-radius: 10px;
    }
</style>
