import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowRight, VscDebugStart } from 'react-icons/all';
import $ from 'jquery';

import NavBar from '../components/pages/NavBar';
import ParallaxBackground from '../components/pages/ParallaxBackground';

import { Container, InfoDiv } from '../styles/pages/about';

const About = () => {
  const [currentContainer, setCurrentContainer] = useState(0);

  const handleGoAhead = () => {
    $('.infoBlock').css('transform', 'translate(-100vw)');
    setTimeout(() => {
      $('.infoBlock').css('transition', 'none');
      $('.infoBlock').css('transform', 'translate(100vw)');
      setTimeout(() => {
        $('.infoBlock').css('transition', '1s ease');
        $('.infoBlock').css('transform', 'translate(0)');
      }, 100);
      setCurrentContainer(currentContainer + 1);
    }, 1000);
  };

  const renderContainers = () => {
    switch (currentContainer) {
      case 0:
        return (
          <InfoDiv className="infoBlock">
            <h1 style={{ position: 'absolute', top: '50px' }}>
              Nascimento das estrelas
            </h1>
            <div className="infos">
              <h2>Nebulosas</h2>
              <br />
              <p>
                Uma nebulosa, também conhecida como nébula, é uma nuvem
                interestelar de poeira, hidrogênio, hélio e gases ionizados.
                Originalmente, nebulosa era o nome de qualquer corpo celeste
                difuso, incluindo galáxias além da Via Láctea. A Galáxia de
                Andrômeda, por exemplo, era atribuída como Nebulosa de Andrômeda
                antes da verdadeira natureza das galáxias ser confirmada no
                início do século XX por Vesto Melvin Slipher, Edwin Hubble e
                outros. A maioria das nebulosas são de tamanho vasto, abrangendo
                tamanhos de até centenas de anos luz de diâmetro. <br />
                <br />
                Embora mais densas que o espaço que as acercam, a maioria das
                nebulosas são muito menos densas que qualquer vácuo criado em
                ambiente terrestre - uma nuvem nebular de tamanho da Terra
                pesaria apenas alguns quilogramas. Nebulosas são muitas vezes
                regiões de formações estrelares, como a Nebulosa da Águia. Essa
                nebulosa é retratada em uma das imagens mais famosas da NASA, os
                "Pilares da Criação". Nessas regiões a formação de gás, poeira e
                outros materiais amontoam-se para formar massas maiores, nas
                quais atraem mais massas, e eventualmente se tornarão maciças o
                suficiente para se tornarem estrelas. Os materiais remanescentes
                são acreditados formarem planetas, e outros objetos de sistemas
                planetários.
              </p>
              <br />
              <h2>Protoestrela</h2>
              <br />
              <p>
                A evolução estelar começa com o colapso gravitacional de
                uma nuvem molecular gigante também conhecida como um berçário
                estelar. A maior parte do espaço "vazio" interno a
                uma galáxia contém em torno de 0,1 a 1 partícula por cm³, mas
                dentro de uma NMG a densidade típica é de uns poucos milhões de
                partículas por cm³. Uma NMG contém 100 000 a 10 000 000 vezes
                mais massa do que o nosso Sol em virtude do seu tamanho: 50 a
                300 anos-luz de comprimento.
                <br />
                <br />
                Um entre vários eventos deve ocorrer para causar o colapso
                gravitacional: a NMG pode colidir com outras ou passar através
                de uma região densa de um braço espiral. A proximidade de uma
                explosão de supernova pode ser um gatilho, enviando um choque de
                matéria dentro de uma NMG a velocidades muito altas. Finalmente,
                uma colisão galáctica pode iniciar uma explosão de formação
                estelar quando as nuvens de gás em cada galáxia são comprimidas
                e agitadas pela colisão. Assim surge uma protoestrela.
              </p>
              <br />
              <h2>Anã marrom</h2>
              <br />
              <p>
                As protoestrelas muito pequenas nunca alcançam temperaturas
                suficientemente altas para iniciar a fusão nuclear do
                hidrogênio, sendo chamadas de anãs marrons. O limite exato entre
                estrelas e anãs marrons depende de sua composição química —
                aquelas com grande metalicidade (relativa abundância de
                elementos mais pesados que hidrogênio e hélio) têm um limite
                mais baixo. Para um objeto com metalicidade próxima da do Sol, o
                limite é de aproximadamente 0,075 massa solar.
                <br />
                <br />
                Anãs marrons com mais do que 13 vezes a massa de Júpiter podem
                fundir o deutério, e alguns astrônomos preferem chamar apenas
                esses objetos de anãs marrons, classificando tudo o que é maior
                do que um planeta, mas menor do que isso, como objeto
                subestelar. Ambos os tipos têm um brilho fraco e morrem
                lentamente, esfriando gradualmente durante centenas de milhões
                de anos.
              </p>
            </div>
            <TiArrowRight size={54} onClick={handleGoAhead} />
          </InfoDiv>
        );
      case 1:
        return (
          <InfoDiv className="infoBlock">
            <h1 style={{ position: 'absolute', top: '50px' }}>Maturidade</h1>
            <div className="infos">
              <h2>Nebulosas</h2>
              <br />
              <p>
                Depois de vários bilhões de anos, dependendo de sua massa
                inicial, o suprimento de hidrogênio acaba, interrompendo a fusão
                nuclear. Sem a pressão interna gerada por esta reação para se
                contrapor à força da gravidade, as camadas externas da estrela
                começam a se contrair em direção ao núcleo e dois processos
                podem ocorrer: a degeneração de elétrons é suficiente para
                compensar a força da gravidade ou o núcleo está quente o
                bastante (cerca de 100 megakelvin) para iniciar a fusão nuclear
                do hélio. Qual desses fenômenos acontece primeiro depende da
                massa da estrela.
                <br />
                <br />
                <h2>Anãs</h2>
                <br />O que acontece depois de uma estrela de baixa massa
                exaurir seu hidrogênio não é conhecido diretamente:
                o universo tem cerca de 13,8 bilhões de anos, o que é muito
                menos (em várias ordens de grandeza, em alguns casos) do que
                essas estrelas levam para exaurir o seu combustível. A teoria
                corrente é baseada em modelos de computador. Algumas estrelas
                podem fundir hélio em pontos superaquecidos do núcleo, causando
                uma reação instável e irregular, bem como um forte vento
                estelar.
                <br />
                <br />
                Nesses casos, a estrela não formará uma nebulosa planetária, mas
                simplesmente irá evaporar, deixando nada mais que uma anã
                marrom ou anã castanha. Uma estrela com menos do que 0,5 massa
                solar nunca será capaz de iniciar a fusão do hélio, mesmo depois
                que o núcleo cessa a fusão do hidrogênio. Ela simplesmente não
                tem a massa necessária para exercer pressão suficiente sobre o
                núcleo. Essas são as anãs vermelhas, tais como Proxima Centauri,
                algumas das quais viverão milhares de vezes mais do que o Sol.
                Quando a reação nuclear cessar no seu núcleo, ela continuará
                irradiando na faixa do infravermelho e micro-ondas do espectro
                eletromagnético por muitos bilhões de anos.
                <br />
                <br />
                Recentes modelos astrofísicos sugerem que anãs vermelhas de 0,1
                massa solar podem permanecer na sequência principal por quase
                seis trilhões de anos, e levar várias centenas de bilhões de
                anos mais para colapsar lentamente em uma anã branca. Uma anã
                amarela é uma estrela da sequência principal de classe G. Essas
                estrelas têm entre 0,8 e 1,2 massas solares e temperatura
                superficial entre 5 300 e 6 000 K. Como outras estrelas da
                sequência principal, uma anã amarela está no processo de
                conversão de hidrogênio para hélio em seu núcleo pela fusão
                nuclear. Uma anã amarela funde hidrogênio por cerca de 10
                bilhões de anos, até ele acabar. Quando isso acontece, a estrela
                se expande e vira uma gigante vermelha, como Aldebarã.
                Eventualmente a gigante vermelha perde suas camadas externas de
                gás, que vira uma nebulosa planetária, e o núcleo esfria e se
                contrai em uma densa anã branca.
              </p>
              <br />
              <h2>Gigantes vermelhas</h2>
              <br />
              <p>
                Estrelas entre 0,5 e 10 massas solares se tornam gigantes
                vermelhas de dois tipos: Estrelas do ramo das gigantes
                vermelhas, cujas camadas ainda estão fundindo hidrogênio em
                hélio, enquanto o núcleo é de hélio inativo. Elas atingiram
                equilíbrio hidrostático, quando a pressão de degeneração de
                elétrons é suficiente para contrabalançar a pressão
                gravitacional.
                <br />
                <br />
                Estrelas do ramo gigante assimptótico, que têm um núcleo que
                passa pela fusão do hélio, produzindo carbono. Em qualquer dos
                casos, a fusão acelerada da camada que contém hidrogênio
                imediatamente acima do núcleo faz com que a estrela se expanda.
                Isto afasta do núcleo as camadas superiores, reduzindo a força
                gravitacional sobre elas, e elas se expandem mais rapidamente do
                que o aumento de produção de energia. Isto faz com que a estrela
                se resfrie, o que a torna mais vermelha do que quando estava na
                sequência principal.
              </p>
              <br />
              <h2>Supergigantes vermelhas</h2>
              <br />
              <p>
                Em estrelas massivas, o núcleo já é grande o suficiente, no
                início da queima da camada de hidrogênio, para que a queima do
                hélio ocorra antes que a pressão de degeneração de elétrons
                tenha a oportunidade de se tornar prevalente.
                <br />
                <br />
                Portanto, quando essas estrelas se expandem e resfriam, elas não
                brilham tanto quanto as estrelas de menor massa; porém, elas
                foram muito mais brilhantes do que as estrelas de menor massa em
                seu início, e são também mais brilhantes do que as gigantes
                vermelhas formadas a partir das estrelas menos massivas. Essas
                estrelas têm pequena probabilidade de sobreviverem
                como supergigantes vermelhas, em vez disso destruindo-se
                como supernovas tipo II. de anos.
              </p>
              <br />
              <>Supergigantes amarelas</>
              <br />
              <p>
                Uma supergigante amarela é uma estrela supergigante do tipo
                espectral F ou G. Essas estrelas geralmente possuem massas entre
                15 e 20 massas solares. Essas estrelas, tal como quaisquer
                outros tipos de supergigante, são velhas e oscilam entre as
                fases azul e vermelha, dependendo dos elementos químicos
                queimados em seus núcleos.
                <br />
                <br />
                Até recentemente, pensava-se que poucas hipergigantes passam
                muito tempo na transitória fase amarela. Esses sistemas podem
                ser os progenitores de supernovas raras ligadas às supergigantes
                amarelas. Poucas dessas supernovas têm sido detectadas - a
                maioria das supergigantes explode em uma supernova na fase azul
                (quente) ou na fase vermelha (fria).
              </p>
              <br />
              <h2>Supergigantes azuis</h2>
              <br />
              <p>
                As supergigantes azuis são estrelas supergigantes de classe O ou
                B.
                <br />
                <br />
                São extremamente quentes e luminosas, com temperaturas à
                superfície entre 20.000 e 50.000K. Têm tipicamente de 10 a
                50 massas solares e podem atingir um raio 25 vezes superior
                ao raio do Sol. Esse raro tipo de estrelas está entre as
                estrelas mais quentes e brilhantes conhecidas no Universo.
                <br />
                <br />
                Por causa de suas grandes massas estas estrelas têm uma
                expectativa de vida relativamente baixa e são observadas
                principalmente em jovens estruturas cósmicas tais
                como aglomerados abertos, nos braços de galáxias espirais e
                em galáxias irregulares. Supergigantes azuis raramente são
                observadas nos núcleos de galáxias espirais, galáxias
                elípticas ou aglomerados globulares, que geralmente têm estrelas
                mais velhas.
              </p>
            </div>
            <TiArrowRight size={54} onClick={handleGoAhead} />
          </InfoDiv>
        );
      case 2:
        return (
          <InfoDiv className="infoBlock">
            <h1 style={{ position: 'absolute', top: '50px' }}>
              Estágios Finais
            </h1>
            <div className="infos">
              <h2>Supernovas</h2>
              <br />
              <p>
                Supernova é um evento astronômico que ocorre durante os estágios
                finais da evolução de algumas estrelas, que é caracterizado por
                uma explosão muito brilhante. Por um curto espaço de tempo, isto
                causa um efeito similar ao surgimento de uma estrela nova, antes
                de desaparecer lentamente ao longo de várias semanas ou meses.
                <br />
                <br />
                Em apenas alguns dias o seu brilho pode intensificar-se em 1
                bilhão de vezes a partir de seu estado original, tornando a
                estrela tão brilhante quanto uma galáxia, mas, com o passar do
                tempo, sua temperatura e brilho diminuem lentamente.
                <br />
                <br />A explosão de uma supernova de tipo II pode expulsar para
                o espaço até 90% da matéria da estrela progenitora.
              </p>
              <br />
              <h2>Nebulosa planetária</h2>
              <br />
              <p>
                Uma nebulosa planetária é um objeto astronómico que é
                constituído por um invólucro brilhante em expansão de plasma e
                gás ionizado, expulsa durante a fase de ramo gigante
                assimptótico que atravessam as estrelas gigantes vermelhas nos
                últimos momentos das suas vidas.
                <br />
                <br />O nome é devido a que os seus descobridores, no século
                XVIII, observaram que a sua aparência era similar aos planetas
                gigantes vistos através dos telescópios ópticos da época, embora
                realmente não tenham relação alguma com os planetas. Trata-se de
                um fenômeno relativamente breve em termos astronômicos, que dura
                por volta de dezenas de milhares de anos.
                <br />
                <br />
                As nebulosas planetárias são objetos importantes em astronomia,
                por desempenharem um papel crucial na evolução química das
                galáxias, libertando ao meio interestelar metais pesados e
                outros produtos da nucleossíntese das estrelas (como carbono,
                nitrogênio, oxigênio e cálcio). Nas galáxias afastadas, as
                nebulosas planetárias poderão ser os únicos objetos dos quais
                podem ser retiradas informações acerca sua composição química.
              </p>
              <br />
              <h2>Estrelas de nêutrons</h2>
              <br />
              <p>
                Estrela de nêutrons é o núcleo colapsado de uma
                grande estrela que, antes do colapso, teria tido um total de
                entre 10 e 29 massas solares. As estrelas de nêutrons são as
                menores e mais densas estrelas que se tem conhecimento. Embora
                elas tipicamente tenham um raio na ordem de 10 quilômetros, elas
                podem ter massas cerca de duas vezes a do Sol. Eles resultam da
                explosão da supernova de uma estrela massiva, combinada com
                o colapso gravitacional, que comprime o núcleo após a densidade
                da estrela anã branca ao dos núcleos atômicos.
                <br />
                <br />A maioria dos modelos básicos para esses objetos implica
                que as estrelas de nêutrons são compostas quase que inteiramente
                de nêutrons, que são partículas subatômicas sem carga elétrica
                líquida e com massa ligeiramente maior que os prótons. Eles são
                apoiados contra o colapso adicional pela pressão de degeneração
                de nêutrons, um fenômeno descrito pelo princípio de exclusão de
                Pauli. Se o remanescente tiver uma massa maior do que 2,2 massas
                solares, a estrela de nêutrons continua a colapsar para formar
                um buraco negro.
              </p>
              <br />
              <h2>Buracos negros</h2>
              <br />
              <p>
                Buraco negro é uma região do espaço-tempo em que o campo
                gravitacional é tão intenso que nada —
                nenhuma partícula ou radiação eletromagnética como a luz — pode
                escapar dela. A teoria da relatividade geral prevê que
                uma massa suficientemente compacta pode deformar o espaço-tempo
                para formar um buraco negro. O limite da região da qual não é
                possível escapar é chamado de horizonte de eventos.
                <br />
                <br />
                Embora o horizonte de eventos tenha um efeito enorme sobre o
                destino e as circunstâncias de um objeto que o atravessa, não
                tem nenhuma característica local detectável. De muitas maneiras,
                um buraco negro age como um corpo negro ideal, pois não reflete
                luz. Além disso, a teoria quântica de campos no espaço-tempo
                curvo prevê que os horizontes de eventos emitem radiação
                Hawking, com o mesmo espectro que um corpo negro de temperatura
                inversamente proporcional à sua massa.
                <br />
                <br />
                Essa temperatura é da ordem dos bilionésimos de
                um kelvin para buracos negros de massa estelar, o que a torna
                praticamente impossível de observar.
              </p>
            </div>
            <TiArrowRight
              size={54}
              onClick={() => {
                handleGoAhead();
                setTimeout(() => {
                  $('#start').css('transform', 'scale(1)');
                }, 1500);
              }}
            />
          </InfoDiv>
        );
      default:
        return (
          <Link to="/map" id="start">
            <b>Comece a explorar</b>
            <VscDebugStart size={54} />
          </Link>
        );
    }
  };

  return (
    <>
      <NavBar dark fixed />
      <Container id="aboutContainer">
        <ParallaxBackground amount={50} />
        {renderContainers()}
      </Container>
    </>
  );
};

export default About;
