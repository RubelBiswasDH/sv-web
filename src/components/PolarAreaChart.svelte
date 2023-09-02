<script lang="ts">
    export let chartId: any, data: any, labels: any;
    import { afterUpdate } from "svelte";

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        PolarAreaController,
        RadialLinearScale,
        ArcElement
    } from 'chart.js';

    let polarAreaChart: any = null

    ChartJS.register(
        Title,
        Tooltip,
        PolarAreaController,
        RadialLinearScale,
        ArcElement,
        Legend
    );

    const renderChart = async(chartId: any, values: any, labels: any) => {

        if(polarAreaChart){
            polarAreaChart.clear();
            polarAreaChart.destroy();
        }

        // @ts-ignore
        let ctx = document.getElementById(chartId).getContext("2d");

        polarAreaChart = new ChartJS(ctx, {
            type: 'polarArea',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Population',
                    data: values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ],
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                size: 8
                            },
                            boxWidth: 8
                        }
                    },
                    title: {
                        display: false,
                        text: 'Countries',
                        align: 'start'
                    }
                }
            }
        });
    }

    afterUpdate(() => {
        renderChart(chartId, data, labels)
    })
</script>

<canvas id={chartId}></canvas>
