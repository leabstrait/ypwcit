import {
    Hero,
    Roles,
    FinancialServicesIT,
    Contact,
    Footer
} from "./sections";
import Nav from "./components/Nav";


const App = () => {
    return (
        <main className="relative bg-slate-200">
            <Nav/>
            <section className="xl:padding-1 ">
                <Hero />
            </section>
            <section className="padding">
                <Roles />
            </section>
            <section className="padding">
                <FinancialServicesIT />
            </section>
            <section className="padding-x py-10">
                <Contact />
            </section>
            <section className="padding-x padding-t pb-8 bg-primary">
                <Footer />
            </section>
        </main>
    );
};

export default App;
