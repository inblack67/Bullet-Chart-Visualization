
import React from 'react'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'
import bullet from "highcharts/modules/bullet";

bullet(highcharts);


let options = {};

const Power = ({ data }) => {

    if(data){
        options = {
            title: {
                text: 'Power Output'
            },
            chart: {
                inverted: true,
                type: 'bullet'
            },
            xAxis: {
                categories: [`<span>Corrected</span><br/>${+data.Power_Output.Corrected.toFixed(2)} ${data.Power_Output.Unit}`]
            },
            series: [{
                name: 'Power_Output',
                color: 'green',
                data: [
                    {
                        y: +data.Power_Output.Operating.toFixed(2),
                        target: +data.Power_Output.Corrected.toFixed(2)
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

export default Power