const coinbaseAPI = async () => {
    
    const fromDate = document.getElementById("start-date").value
    const toDate = document.getElementById("end-date").value
    console.log(fromDate, toDate)
    const currency = "USD"
    const data = await axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}&currency=${currency}`)
    console.log(data)
    const bitcoinDate = Object.keys(data.data.bpi)
    const bitcoinValue = Object.values(data.data.bpi)

    const ctx = document.getElementById('my-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: bitcoinDate,
          datasets: [
            {
              label: 'Bitcoin value in the last 31 days',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: bitcoinValue
            }
          ]
        }
      }); // closes chart = new Chart()
    } 


coinbaseAPI()