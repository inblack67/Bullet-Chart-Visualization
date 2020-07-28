
import React from 'react'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'
import bullet from "highcharts/modules/bullet";

bullet(highcharts);


let options = {};

const Plant = ({ data }) => {

    if(data){
        options = {
            title: {
                text: 'Plant Efficiency'
            },
            chart: {
                inverted: true,
                type: 'bullet'
            },
            xAxis: {
                categories: [`<span>Corrected</span><br/>${+data.Plant_Efficiency.Corrected.toFixed(2)} ${data.Plant_Efficiency.Unit}`]
            },
            series: [{
                name: 'Plant_Efficiency',
                color: '#ccc',
                data: [
                    {
                        y: +data.Plant_Efficiency.Operating.toFixed(2),
                        target: +data.Plant_Efficiency.Corrected.toFixed(2)
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

export default Plant