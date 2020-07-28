import React from 'react'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'
import bullet from "highcharts/modules/bullet";

bullet(highcharts);


let options = {};

const Heat = ({ data }) => {

    if(data){
        options = {
            title: {
                text: 'Turbine Cycle Heat Rate'
            },
            chart: {
                inverted: true,
                type: 'bullet'
            },
            xAxis: {
                categories: [`<span>Corrected</span><br/>${+data.Turbine_Cycle_Heat_Rate.Corrected.toFixed(2)} ${data.Turbine_Cycle_Heat_Rate.Unit}`]
            },
            series: [{
                name: 'Turbine_Cycle_Heat_Rate',
                color: 'grey',
                data: [
                    {
                        y: +data.Turbine_Cycle_Heat_Rate.Operating.toFixed(2),
                        target: +data.Turbine_Cycle_Heat_Rate.Corrected.toFixed(2)
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

export default Heat