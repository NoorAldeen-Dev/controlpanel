import Chart, { scales } from 'chart.js/auto'

(async function() {
  const data = [
    { count: 423 },
    { count: 534 },
    { count: 1244 },
    { count: 122 },
    { count: 644 },
    { count: 322 },
    { count: 1240 },
    { count: 1603 },
    { count: 234 },
    { count: 442 },
    { count: 543 },
    { count: 123 },


  ];
  const chartCanvas =document.getElementById('example-chart');
  const brandcolor =(window.getComputedStyle(chartCanvas)).getPropertyValue("--color-brand");//لتحديد لون بمتغير
  const chart = new Chart(chartCanvas,
    
     
    {
      type: 'line',
      data: {
        labels: ["ديسمبر","نوفمبر","أوكتوبر","سبتمبر","أغسطس","يوليو","يونيو","ماي","أبريل","مارس","فبراير","يناير"],//اسماء الأعمدة في مححور السينات
        datasets: [
          {
            label: 'مبيعات الشهر',
            data: data.map(row => row.count),
            borderColor:brandcolor,//لون الخط نفسه
            lineTension:0.2,//لتحديد مدى الانكسارات
          }
        ]
      },
      options: {
        plugins: {
            legend: {
                display: false,                
            }
        },
        scales:{
            y:{
                display:false
            },
            x:{
                position:"top"
            }
        }
      }
    });

    const navigation = document.querySelector(".c-tabel__navigation");
    const randomArray = (mylength , max) => Array.from({length:mylength}, ()=> Math.round(Math.random()*max));
    navigation.addEventListener("click" , () =>{
        chart.data.datasets[0].data=randomArray(12,1200);
        chart.update();
    });
})();
