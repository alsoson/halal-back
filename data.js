import axios from 'axios'
import cheerio from 'cheerio'
import mongoose from 'mongoose'
import data from './models/data.js'
import 'dotenv/config'
import fs from 'fs'

mongoose.connect(process.env.DB_URL)
const restaurants = []

const fetchData = async () => {
  try {
    const page = []
    page[0] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=1')
    page[1] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=2')
    page[2] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=3')
    page[3] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=4')
    page[4] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=5')
    page[5] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=6')
    page[6] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=7')
    page[7] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=8')
    page[8] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=9')
    page[9] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=10')
    page[10] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=11')
    page[11] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=12')
    page[12] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=13')
    page[13] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=14')
    page[14] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=15')
    page[15] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=16')
    page[16] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=17')
    page[17] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=18')
    page[18] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=19')
    page[19] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=20')
    page[20] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0020118&page=21')

    for (const p of page) {
      const $ = cheerio.load(p.data)
      $('.muslimDataTable tbody').each(function () {
        const res = $(this).text().replace(/^(\r\n|\n|\r|\t| )+/gm, '').replace('+', '').split(/\n/).filter(text => text.length > 0)
        data.create({
          name: res[0],
          district: res[2],
          type: res[3],
          address: res[6].replace('地址：', ''),
          phone: res[5].replace('電話：', '')
        })
      })
    }
    // const geocodingClient = new Client({})

    // for (const r of restaurants) {
    //   const params = {
    //     address: r[6].replace('地址：', ''),
    //     components: 'country:TW',
    //     key: 'AIzaSyBuR1Uo45nMjeb-PClEjePTzxMEcVosnac'
    //   }
    //   params()

    //   geocodingClient.geocode({
    //     params
    //   })
    //     .then((response) => {
    //       // console.log(response.data.results[0].geometry.location.lat)
    //       r.push(response.data.results[0].geometry.location.lat)
    //       r.push(response.data.results[0].geometry.location.lng)
    //     })
    //     .catch((error) => {
    //       // console.log('error')
    //     })
    // }
  } catch (error) {
    console.log(error)
  }
  fs.writeFileSync('bubbles.json', JSON.stringify(restaurants, null, 2))
}

fetchData()
export default {
  fetchData,
  restaurants
  // replyRestaurants,
  // replyMap
}
