import axios from 'axios'
import cheerio from 'cheerio'
import mongoose from 'mongoose'
import dataAttraction from './models/dataAttraction.js'
import 'dotenv/config'
import fs from 'fs'

mongoose.connect(process.env.DB_URL)
const data = []

const fetchData = async () => {
  try {
    const page = []
    page[0] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0042063&page=1')
    page[1] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0042063&page=2')
    page[2] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0042063&page=3')
    page[3] = await axios.get('https://www.taiwan.net.tw/m1.aspx?sNo=0042063&page=4')

    for (const p of page) {
      const $ = cheerio.load(p.data)
      $('.muslimDataTable tbody').each(function () {
        const res = $(this).text().replace(/^(\r\n|\n|\r|\t| )+/gm, '').replace('+', '').split(/\n/).filter(text => text.length > 0)
        dataAttraction.create({
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
  fs.writeFileSync('dataAttraction.json', JSON.stringify(data, null, 2))
}

fetchData()
export default {
  fetchData,
  data
  // replyRestaurants,
  // replyMap
}
