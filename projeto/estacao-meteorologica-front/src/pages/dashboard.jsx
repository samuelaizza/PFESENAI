import Header from "../components/header.jsx";
import "./dashboard.css";
import GraficoBarra from "../components/graficoBarra.jsx";

export default function Dashboard(){
    return(
        <div>
            <Header />

            <section className="cards">
                <div className="card">
                    <h6>Temperatura</h6>
                    <h2>32º</h2>
                </div>
                <div className="card">
                    <h6>Umidade</h6>
                    <h2>68%</h2>
                </div>
                <div className="card">
                    <h6>Pressão</h6>
                    <h2>1013 hPa</h2>
                </div>
                <div className="card">
                    <h6>Vento</h6>
                    <h2>12Km</h2>
                </div>
            </section>

            <section className="graficos">
                <h6>Gráficos</h6>
                <div className="grafico">
                    <GraficoBarra />
                </div>
                <div className="grafico">
                    <GraficoBarra />
                </div>

            </section>

            <section className="leituras">
                <h6>Leituras recentes</h6>
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Temp.</th>
                            <th>Umidade</th>
                            <th>Vento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12:00</td>
                            <td>47ºC</td>
                            <td>50%</td>
                            <td>13Km</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}
