import axios from "axios";

export const getDolar = (tipo) => {
    return axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
      .then(result => {
          if (tipo == "blue") {
            return result.data[1].casa.venta
          } else {
            return result.data[0].casa.venta
          }
      })
      .catch(err => { console.error(err) })
}