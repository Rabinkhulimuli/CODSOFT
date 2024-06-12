import './skill.css'
import Chart from 'react-apexcharts'

export default function Skill(){
  
    return (<><div className='react'>
            <h1>My Skills</h1>
            <div className='react-p' >
            <p>React is a declarative, efficient, and flexible
                 JavaScript library for building user interfaces.Im currently using 
                 React as Frontend web development.Here are my stats on React
                 </p>
            </div>
            <div className='react-donut' >
                <Chart
                    type="donut"
                    width={349}
                    height={550}
                    series={[90,10]}
                    
                    options={{
                        labels:['React','incomplete'
                        ],
                        title:{
                            text:"React"
                        },
                        plotOptions:{
                            pie:{
                                donut:{
                                    labels:{
                                        show:true,
                                        total:{
                                            show:true,
                                            color:'red',
                                            fontSize: '20',
                                            showAlways:false
                                        }
                                    }
                                }
                            }
                        },
                        dataLabels:{
                            enabled:false
                        }
                        
                    }}


                >
                </Chart>
            </div>
            </div>
            <div>
                <div className='nodejs-p'>
                    <p>
                    Node.js is an open-source and 
                    cross-platform JavaScript runtime
                     environment.Im currently using node
                      js as backend web development.
                      Here are my stats on React
                    </p>
                </div>
                <div className='nodejs-donut' >
                    <Chart
                        type='donut'
                        width='349'
                        height='550'
                        series={[70,30]}
                        options={{
                            labels:['Node js',"On going"],
                            title:{
                                text: "Node js"
                            },
                            plotOptions:{
                                pie:{
                                    donut:{
                                        labels:{
                                            show:true,
                                            total:{
                                                show:true,
                                                color:'green',
                                                fontSize:'20'
                                            }
                                        }
                                    }
                                }
                            },
                            dataLabels:{
                                enabled:false
                            }
                        }}
                    ></Chart>
                </div>
            
    </div>
    </>)
}