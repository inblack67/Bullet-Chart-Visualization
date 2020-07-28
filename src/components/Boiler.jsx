import React from 'react'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'
import bullet from "highcharts/modules/bullet";

bullet(highcharts);


let options = {};

const Chart = ({ data }) => {

    if(data){
        options = {
            title: {
                text: 'Boiler Efficiency'
            },
            chart: {
                inverted: true,
                type: 'bullet'
            },
            xAxis: {
                categories: [`<span>Corrected</span><br/>${+data.Boiler_efficiency.Corrected.toFixed(2)} ${data.Boiler_efficiency.Unit}`]
            },
            series: [{
                name: 'Boiler_efficiency',
                color: 'red',
                data: [
                    {
                        y: +data.Boiler_efficiency.Operating.toFixed(2),
                        target: +data.Boiler_efficiency.Corrected.toFixed(2)
                    },
            ]
            }],
        }
    }

    return (
        <div>
            <ReactHighcharts highcharts={highcharts} options={options} />
        </div>
    )
}

export default Chart