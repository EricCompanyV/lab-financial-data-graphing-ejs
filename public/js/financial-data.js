const coinbaseAPI = async () => {
    
    const fromDate = document.getElementById("start-date").value
    const toDate = document.getElementById("end-date").value
    const currencySelected = document.getElementById("currency-selected")
    const currency = currencySelected.options[currencySelected.selectedIndex].value
    const data = await axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}&currency=${currency}`)
    const bitcoinDate = Object.keys(data.data.bpi)
    const bitcoinValue = Object.values(data.data.bpi)
    const maxValue = Math.max(...bitcoinValue)
    console.log({maxValue}, bitcoinValue)
    const maxValueElement = document.getElementById("max-value")
    maxValueElement.innerHTML = `Max: ${maxValue} ${currency}`
    const minValue = Math.min(...bitcoinValue)
    const minValueElement = document.getElementById("min-value")
    minValueElement.innerHTML = `Min: ${minValue} ${currency}`


    const ctx = document.getElementById('my-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: bitcoinDate,
          options: {
            events: ['click']
          },
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

