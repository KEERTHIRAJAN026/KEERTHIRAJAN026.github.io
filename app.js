import { Chart, AreaSeries, Category } from '@syncfusion/ej2-charts';
Chart.Inject(AreaSeries, Category);
 
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series:[
       {
            type: 'Area', xName: 'x', yName: 'y',
            dataSource: [{ x: 'CHN', y: 12, },
            { x: 'GER', y: 15, },
            { x: 'RUS', y: 30 },
            { x: 'BRZ', y: 6.4 },
            { x: 'IND', y: 14 }],
        }       
],
}, '#Chart');