

function Cinemahome() {
    return (
        <div className="page">

            <nav className="navbar">

                <div className="logo">
                    СИНЕМАТИКА
                </div>

                <div className="menu">
                    <span className="">Фильмы</span>
                    <span className="">Кинотеатры</span>
                    <span className="">Анонсы</span>
                </div>

                <div className="lang">
                    <span>Рус</span>
                    <span>Кыргыз</span>
                    <span>Eng</span>
                </div>

            </nav>


            <div className="banner">

            </div>


            <div className="container">

                <h2>СЕГОДНЯ В КИНО</h2>

                <div className="grid">
                    <a href="/film">
                        <div className="card112">

                            <img src="https://edinstvo.by/wp-content/uploads/2024/11/film.jpg" />


                            <div className="bottom112">
                                <span>Кассандра</span>
                                <span>(16+)</span>
                            </div>

                        </div>
                    </a>

                    <div className="card112">

                        <img src="https://edinstvo.by/wp-content/uploads/2024/11/film.jpg" />


                        <div className="bottom112">
                            <span>Супергёрл</span>
                            <span>(12+)</span>
                        </div>

                    </div>


                    <div className="card112">

                        <img src="https://edinstvo.by/wp-content/uploads/2024/11/film.jpg" />


                        <div className="bottom112">
                            <span>История игрушек 5</span>
                            <span>(0+)</span>
                        </div>

                    </div>


                    <div className="card112">

                        <img src="https://edinstvo.by/wp-content/uploads/2024/11/film.jpg" />

                        <div className="bottom112">
                            <span>Уулболсун</span>
                            <span>(14+)</span>
                        </div>

                    </div>


                    <div className="card112">

                        <img src="https://edinstvo.by/wp-content/uploads/2024/11/film.jpg" />


                        <div className="bottom112">
                            <span>Махабат</span>
                            <span>(12+)</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Cinemahome;