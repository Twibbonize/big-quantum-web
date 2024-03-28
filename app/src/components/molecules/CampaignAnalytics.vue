<script setup>
import {
    TabGroup,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    RadioGroup,
    RadioGroupOption
} from '@headlessui/vue';
import AnalyticsStat from './Analytics/AnalyticsStat.vue';
import VueApexCharts from 'vue3-apexcharts';
import { ref, onMounted } from 'vue';
import * as dayjs from 'dayjs';

const entitySource = ref('supporters');
const chartHoverDate = ref(null);

const series = {
    supporters: [
        {
            key: 'supporters',
            name: 'Supporters',
            desc: 'The number of people who support your campaign',
            icon: '/assets/img/icons/solid-series.svg'
        }
    ],
    interactions: [
        {
            key: 'interactions',
            name: 'Interactions',
            desc: 'The number of action from users to your campaign',
            icon: '/assets/img/icons/solid-series.svg'
        },
        {
            key: 'unique_interactions',
            name: 'Unique Interactions',
            desc: 'The number of single action from users to your campaign',
            icon: '/assets/img/icons/stroke-series.svg'
        }
    ],
    visit: [
        {
            key: 'visit',
            name: 'Visit',
            desc: 'The number of single browsing session who have visited your campaign page',
            icon: '/assets/img/icons/solid-series.svg'
        },
        {
            key: 'unique_visit',
            name: 'Unique Visit',
            desc: 'The number of people who have visited your campaign page',
            icon: '/assets/img/icons/stroke-series.svg'
        }
    ]
};

const dates = [
    new Date(2024, 2, 22),
    new Date(2024, 2, 23),
    new Date(2024, 2, 24),
    new Date(2024, 2, 25),
    new Date(2024, 2, 26),
    new Date(2024, 2, 27),
    new Date(2024, 2, 28)
];
const values = [0, 2, 4, 8, 4, 1, 0];
const chart = {
    series: [
        {
            name: 'Supporters',
            data: dates.map((date, i) => {
                return [date, values[i]];
            })
        }
    ],
    events: {
        onMouseMove: function (event, chartContext, config) {
            chartHoverDate.value = dates[config.dataPointIndex];
        }
    },
    options: {
        chart: {
            toolbar: {
                show: false
            }
        },

        legend: {
            show: false
        },
        markers: {
            size: 0,
            colors: ['#16DAC1', '#FFFFFF'],
            strokeColors: '#16DAC1',
            hover: {
                size: 4
            }
        },
        grid: {
            show: true,
            padding: {
                left: -5,
                bottom: 0,
                top: 0,
                right: 0
            }
        },
        dataLabels: {
            enabled: false,
            enabledOnSeries: false
        },
        tooltip: {
            enabled: true,
            intersect: false,
            x: {
                show: false
            },
            marker: {
                show: false
            },
            items: {
                display: 'none'
            },
            onDatasetHover: {
                highlightDataSeries: false
            }
        },
        xaxis: {
            type: 'datetime',
            tooltip: {
                enabled: false
            },
            labels: {
                datetimeUTC: true,
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM d, yy',
                    day: 'MMM dd',
                    hour: 'HH:mm'
                },
                formatter: (value) => {
                    const date = dayjs(value);

                    const isFirstDate = dayjs(dates[0]).isSame(date);

                    if (!isFirstDate) {
                        return date.format('DD');
                    }

                    return date.format('MMM DD');
                }
            }
        },
        colors: ['#16DAC1'],
        stroke: {
            width: 2,
            dashArray: [0, 6]
        },
        yaxis: {
            min: 0,
            max: 15,
            tickAmount: 4,
            labels: {
                offsetX: -15
            }
        }
    }
};
</script>

<template>
    <div class="analytics">
        <RadioGroup v-model="entitySource">
            <div class="analytics__stats">
                <RadioGroupOption
                    value="supporters"
                    v-slot="{ active, checked }"
                    class="flex-1 mb-4"
                >
                    <div
                        :class="[
                            'analytics__stat-wrapper',
                            checked && 'analytics__stat-wrapper--selected'
                        ]"
                    >
                        <AnalyticsStat :active="active || checked" :value="18">
                            <template #icon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12ZM13.626 8.97023H12.906C12.906 8.49284 12.7164 8.03499 12.3788 7.69742C12.0412 7.35985 11.5834 7.17021 11.106 7.17021C10.6286 7.17021 10.1707 7.35985 9.83317 7.69742C9.49559 8.03499 9.30595 8.49284 9.30595 8.97023H8.58594C8.58594 8.30188 8.85144 7.6609 9.32404 7.1883C9.79664 6.7157 10.4376 6.4502 11.106 6.4502C11.7743 6.4502 12.4153 6.7157 12.8879 7.1883C13.3605 7.6609 13.626 8.30188 13.626 8.97023ZM14.8936 11.6347C15.0543 11.541 15.2368 11.4914 15.4228 11.4907C15.7092 11.4907 15.9839 11.6045 16.1865 11.807C16.389 12.0096 16.5028 12.2843 16.5028 12.5707V14.7307C16.5028 15.3991 16.2373 16.0401 15.7647 16.5127C15.2921 16.9853 14.6511 17.2508 13.9828 17.2508H12.1827C11.6355 17.2518 11.1073 17.0505 10.6995 16.6856L7.81947 14.0575C7.66738 13.9067 7.56358 13.714 7.52127 13.504C7.47897 13.294 7.50006 13.0762 7.58187 12.8782C7.66369 12.6802 7.80252 12.5111 7.98073 12.3922C8.15894 12.2733 8.36847 12.2102 8.58268 12.2107C8.81214 12.2091 9.03586 12.2824 9.21989 12.4195L10.0227 12.9667V8.97064C10.0227 8.6842 10.1365 8.4095 10.339 8.20695C10.5416 8.00441 10.8163 7.89062 11.1027 7.89062C11.3892 7.89062 11.6639 8.00441 11.8664 8.20695C12.069 8.4095 12.1827 8.6842 12.1827 8.97064V10.8355C12.413 10.7542 12.664 10.7534 12.8948 10.8332C13.1256 10.913 13.3226 11.0686 13.4536 11.2747C13.6142 11.181 13.7968 11.1313 13.9828 11.1307C14.1648 11.1311 14.3437 11.1776 14.5029 11.2657C14.6621 11.3538 14.7965 11.4807 14.8936 11.6347ZM15.2556 16.0035C15.5932 15.666 15.7828 15.2081 15.7828 14.7307V12.5707C15.7828 12.4752 15.7449 12.3837 15.6774 12.3161C15.6098 12.2486 15.5183 12.2107 15.4228 12.2107C15.3273 12.2107 15.2357 12.2486 15.1682 12.3161C15.1007 12.3837 15.0628 12.4752 15.0628 12.5707V12.9307H14.3428V12.2107C14.3428 12.1152 14.3048 12.0236 14.2373 11.9561C14.1698 11.8886 14.0782 11.8507 13.9828 11.8507C13.8873 11.8507 13.7957 11.8886 13.7282 11.9561C13.6607 12.0236 13.6228 12.1152 13.6228 12.2107V12.9307H12.9028V11.8507C12.9028 11.7552 12.8648 11.6636 12.7973 11.5961C12.7298 11.5286 12.6382 11.4907 12.5427 11.4907C12.4473 11.4907 12.3557 11.5286 12.2882 11.5961C12.2207 11.6636 12.1827 11.7552 12.1827 11.8507V12.9307H11.4627V8.97064C11.4627 8.87516 11.4248 8.78359 11.3573 8.71608C11.2898 8.64857 11.1982 8.61064 11.1027 8.61064C11.0072 8.61064 10.9157 8.64857 10.8482 8.71608C10.7806 8.78359 10.7427 8.87516 10.7427 8.97064V14.3347L8.79869 13.0027C8.7452 12.9626 8.6816 12.9382 8.61501 12.9322C8.54843 12.9262 8.48148 12.9388 8.42168 12.9687C8.36188 12.9986 8.31159 13.0446 8.27644 13.1014C8.24129 13.1583 8.22268 13.2239 8.22268 13.2907C8.22307 13.3852 8.26057 13.4757 8.32708 13.5427L11.1891 16.1708C11.4657 16.4072 11.8188 16.5352 12.1827 16.5308H13.9828C14.4602 16.5308 14.918 16.3411 15.2556 16.0035Z"
                                        fill="#16DAC1"
                                    />
                                </svg>
                            </template>

                            <span>Supporters</span>
                        </AnalyticsStat>
                    </div>
                </RadioGroupOption>

                <RadioGroupOption
                    value="interactions"
                    v-slot="{ active, checked }"
                    class="flex-1 mb-4"
                >
                    <div
                        :class="[
                            'analytics__stat-wrapper',
                            checked && 'analytics__stat-wrapper--selected'
                        ]"
                    >
                        <AnalyticsStat :active="active || checked" :value="15">
                            <template #icon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12ZM13.626 8.97023H12.906C12.906 8.49284 12.7164 8.03499 12.3788 7.69742C12.0412 7.35985 11.5834 7.17021 11.106 7.17021C10.6286 7.17021 10.1707 7.35985 9.83317 7.69742C9.49559 8.03499 9.30595 8.49284 9.30595 8.97023H8.58594C8.58594 8.30188 8.85144 7.6609 9.32404 7.1883C9.79664 6.7157 10.4376 6.4502 11.106 6.4502C11.7743 6.4502 12.4153 6.7157 12.8879 7.1883C13.3605 7.6609 13.626 8.30188 13.626 8.97023ZM14.8936 11.6347C15.0543 11.541 15.2368 11.4914 15.4228 11.4907C15.7092 11.4907 15.9839 11.6045 16.1865 11.807C16.389 12.0096 16.5028 12.2843 16.5028 12.5707V14.7307C16.5028 15.3991 16.2373 16.0401 15.7647 16.5127C15.2921 16.9853 14.6511 17.2508 13.9828 17.2508H12.1827C11.6355 17.2518 11.1073 17.0505 10.6995 16.6856L7.81947 14.0575C7.66738 13.9067 7.56358 13.714 7.52127 13.504C7.47897 13.294 7.50006 13.0762 7.58187 12.8782C7.66369 12.6802 7.80252 12.5111 7.98073 12.3922C8.15894 12.2733 8.36847 12.2102 8.58268 12.2107C8.81214 12.2091 9.03586 12.2824 9.21989 12.4195L10.0227 12.9667V8.97064C10.0227 8.6842 10.1365 8.4095 10.339 8.20695C10.5416 8.00441 10.8163 7.89062 11.1027 7.89062C11.3892 7.89062 11.6639 8.00441 11.8664 8.20695C12.069 8.4095 12.1827 8.6842 12.1827 8.97064V10.8355C12.413 10.7542 12.664 10.7534 12.8948 10.8332C13.1256 10.913 13.3226 11.0686 13.4536 11.2747C13.6142 11.181 13.7968 11.1313 13.9828 11.1307C14.1648 11.1311 14.3437 11.1776 14.5029 11.2657C14.6621 11.3538 14.7965 11.4807 14.8936 11.6347ZM15.2556 16.0035C15.5932 15.666 15.7828 15.2081 15.7828 14.7307V12.5707C15.7828 12.4752 15.7449 12.3837 15.6774 12.3161C15.6098 12.2486 15.5183 12.2107 15.4228 12.2107C15.3273 12.2107 15.2357 12.2486 15.1682 12.3161C15.1007 12.3837 15.0628 12.4752 15.0628 12.5707V12.9307H14.3428V12.2107C14.3428 12.1152 14.3048 12.0236 14.2373 11.9561C14.1698 11.8886 14.0782 11.8507 13.9828 11.8507C13.8873 11.8507 13.7957 11.8886 13.7282 11.9561C13.6607 12.0236 13.6228 12.1152 13.6228 12.2107V12.9307H12.9028V11.8507C12.9028 11.7552 12.8648 11.6636 12.7973 11.5961C12.7298 11.5286 12.6382 11.4907 12.5427 11.4907C12.4473 11.4907 12.3557 11.5286 12.2882 11.5961C12.2207 11.6636 12.1827 11.7552 12.1827 11.8507V12.9307H11.4627V8.97064C11.4627 8.87516 11.4248 8.78359 11.3573 8.71608C11.2898 8.64857 11.1982 8.61064 11.1027 8.61064C11.0072 8.61064 10.9157 8.64857 10.8482 8.71608C10.7806 8.78359 10.7427 8.87516 10.7427 8.97064V14.3347L8.79869 13.0027C8.7452 12.9626 8.6816 12.9382 8.61501 12.9322C8.54843 12.9262 8.48148 12.9388 8.42168 12.9687C8.36188 12.9986 8.31159 13.0446 8.27644 13.1014C8.24129 13.1583 8.22268 13.2239 8.22268 13.2907C8.22307 13.3852 8.26057 13.4757 8.32708 13.5427L11.1891 16.1708C11.4657 16.4072 11.8188 16.5352 12.1827 16.5308H13.9828C14.4602 16.5308 14.918 16.3411 15.2556 16.0035Z"
                                        fill="#16DAC1"
                                    />
                                </svg>
                            </template>

                            <span>Interactions</span>
                        </AnalyticsStat>
                    </div>
                </RadioGroupOption>

                <RadioGroupOption value="visit" v-slot="{ active, checked }" class="flex-1 mb-4">
                    <div
                        :class="[
                            'analytics__stat-wrapper',
                            checked && 'analytics__stat-wrapper--selected'
                        ]"
                    >
                        <AnalyticsStat :active="active || checked" :value="131">
                            <template #icon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5ZM11.4305 9.42676C11.615 9.36645 11.8068 9.33423 12 9.33105C12.4274 9.3297 12.8444 9.46958 13.1918 9.73087C13.5393 9.99217 13.7997 10.3616 13.9361 10.7869C14.0725 11.2122 14.0779 11.6718 13.9517 12.1006C13.8255 12.5293 13.5741 12.9055 13.2329 13.1759C12.8918 13.4462 12.4783 13.597 12.051 13.6069C11.6237 13.6168 11.2043 13.4853 10.8521 13.231C10.5 12.9767 10.233 12.6124 10.0889 12.1899C9.94487 11.7674 9.93106 11.3081 10.0495 10.8769C10.1996 10.9665 10.369 11.0142 10.5417 11.0154C10.6757 11.0154 10.8085 10.9877 10.9323 10.9338C11.0562 10.88 11.1687 10.801 11.2635 10.7015C11.3583 10.602 11.4335 10.4838 11.4848 10.3537C11.5361 10.2237 11.5625 10.0843 11.5625 9.94355C11.5613 9.76228 11.5159 9.58435 11.4305 9.42676ZM12 7.7998C14.2409 7.7998 16.198 9.17008 17.1866 11.1954C17.2283 11.282 17.25 11.3777 17.25 11.4747C17.25 11.5718 17.2283 11.6675 17.1866 11.7541C16.1986 13.7786 14.2409 15.1498 12 15.1498C9.75908 15.1498 7.802 13.7795 6.81343 11.7543C6.77173 11.6676 6.75 11.572 6.75 11.4749C6.75 11.3778 6.77173 11.2822 6.81343 11.1955C7.80145 9.17104 9.75908 7.7998 12 7.7998ZM7.66273 11.4748C8.55304 13.1783 10.2017 14.2311 12 14.2311C13.7985 14.2311 15.4471 13.1783 16.3373 11.4748C15.447 9.77129 13.7985 8.71855 12 8.71855C10.2015 8.71855 8.55304 9.77129 7.66273 11.4748Z"
                                        fill="#16DAC1"
                                    />
                                </svg>
                            </template>

                            <span>Visit</span>
                        </AnalyticsStat>
                    </div>
                </RadioGroupOption>
            </div>
        </RadioGroup>

        <TabGroup>
            <TabList>
                <div class="flex items-center space-x-2 mt-4">
                    <Tab v-slot="{ selected }">
                        <div :class="['charts__tab', selected && 'charts__tab--selected']">
                            Trend
                        </div>
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <div :class="['charts__tab', selected && 'charts__tab--selected']">
                            Country
                        </div>
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <div :class="['charts__tab', selected && 'charts__tab--selected']">
                            City
                        </div>
                    </Tab>
                </div>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <div class="space-y-5">
                        <VueApexCharts
                            :series="chart.series"
                            :type="'line'"
                            :options="chart.options"
                            @mouseMove="chart.events.onMouseMove"
                        />

                        <div class="flex flex-col">
                            <div
                                v-for="data in series[entitySource]"
                                :key="data.key"
                                class="flex items-center justify-between"
                            >
                                <div class="flex items-center space-x-2">
                                    <img :src="data.icon" :alt="data.key" />
                                    <span class="text-sm text-content">{{ data.name }}</span>
                                    <button class="text-black/20">
                                        <i class="ri-information-line"></i>
                                    </button>

                                    <span class="text-content">
                                        <i class="ri-arrow-right-s-line ri-lg"></i>
                                        <span class="text-sm">{{
                                            dayjs(chartHoverDate).format('MMM DD')
                                        }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>

<style scoped lang="scss">
.analytics {
    @apply bg-white border border-light p-4 rounded-3xl;

    .analytics__stats {
        @apply flex items-center justify-between whitespace-nowrap overflow-auto;

        &::-webkit-scrollbar {
            height: 4px;
            background: #efeff1;
            border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
            background: #16dac1;
            border-radius: 2px;
        }

        .analytics__stat-wrapper {
            @apply border-l border-b border-light px-3 pb-3;

            &.analytics__stat-wrapper--selected {
                @apply border-b-transparent;
            }
        }

        div:first-of-type .analytics__stat-wrapper {
            @apply border-l-transparent pl-0;
        }
    }

    .charts__tab {
        @apply rounded-full px-3 border border-light hover:border-main font-medium text-light hover:text-main flex items-center justify-center transition-colors duration-200;
        min-width: 72px;
        height: 40px;

        font-size: 0.8rem;

        @include xs {
            min-width: unset;
        }

        @include sm_screen {
            font-size: 0.9rem;
        }

        &.charts__tab--selected {
            @apply bg-main text-black;
        }
    }
}
</style>
