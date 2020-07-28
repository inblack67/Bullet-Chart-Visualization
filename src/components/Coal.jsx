import React from 'react'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'
import bullet from "highcharts/modules/bullet";

bullet(highcharts);


let options = {};

const Coal = ({ data }) => {

    if(data){
        options = {
            title: {
                text: 'Coal Firing Rate'
            },
            chart: {
                inverted: true,
                type: 'bullet'
            },
            xAxis: {
                categories: [`<span>Corrected</span><br/>${+data.Coal_Firing_Rate.Corrected.toFixed(2)} ${data.Coal_Firing_Rate.Unit}`]
            },
            series: [{
                name: 'Coal_Firing_Rate',
                color: 'black',
                data: [
                    {
                        y: +data.Coal_Firing_Rate.Operating.toFixed(2),
                        target: +data.Coal_Firing_Rate.Corrected.toFixed(2)
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

export default Coal