import React, { useEffect } from "react";
import PortalModal from "./PortalModal";
// import NoPortalModal from "./NoPortalModal";

const PopUpModal: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    const autoModal = () => {
      if (window.scrollY > 100) {
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", autoModal);
    return () => window.removeEventListener("scroll", autoModal);
  }, []);

  return (
    <div className="m-2">
      <nav className="flex gap-2">
        {isOpen && <PortalModal setIsOpen={setIsOpen} />}
      </nav>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 border-2 bg-green-400 rounded"
      >
        Open Modal
      </button>
      <p className="leading-loose tracking-widest font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
        eveniet nobis suscipit architecto obcaecati, magnam quia quis et, omnis
        repudiandae pariatur ad. Consectetur, nulla eligendi. Placeat veniam
        neque sit repellat dicta cupiditate nisi quo praesentium corrupti
        consequuntur, id exercitationem ipsum quas, voluptatum, quasi explicabo.
        Cumque mollitia molestiae eum dolores dolorem minus nihil similique.
        Accusantium, omnis. Unde, illum! Voluptatibus excepturi tempore quis
        minus nisi ea officia. Nisi soluta libero nesciunt! Ab voluptate esse
        laboriosam cum veniam vero tenetur illo sequi perferendis eaque eos,
        sint molestias hic sapiente corrupti officiis vitae minima nobis id
        nesciunt optio magnam. Mollitia quibusdam laudantium asperiores quae?
        Maxime harum omnis commodi magni et fugiat quam totam fuga distinctio
        repellendus quibusdam vel nam, reprehenderit eveniet. Qui perspiciatis
        est maiores nisi doloremque nihil impedit quasi ipsum culpa corporis
        deserunt inventore animi, deleniti error. Nam, nesciunt neque natus illo
        vel eveniet a pariatur. Ratione impedit rem et sapiente nisi aliquid
        accusantium ea architecto beatae at repudiandae, eos eaque cum provident
        obcaecati eveniet sed officiis perspiciatis. Sunt, repellat accusantium,
        quaerat optio mollitia laborum corrupti suscipit ipsam architecto veniam
        at voluptatibus quia in hic enim, inventore libero dolore id consequatur
        necessitatibus officia quasi! Deleniti totam dolor id inventore
        distinctio aliquam. Autem accusamus magnam minima ullam aperiam,
        mollitia, quas ratione, voluptates repellat similique culpa cupiditate
        animi laboriosam nam quasi fuga. Eum, nemo? Consequatur accusantium
        deleniti, iusto voluptate harum sunt minima reiciendis esse soluta,
        veniam maxime tempora id. Eaque, harum dolor commodi exercitationem
        accusamus voluptates officia cumque, cum totam fugit, sit distinctio rem
        fuga iste a corrupti quod ad. Perspiciatis beatae nobis veniam facilis
        enim. Molestiae numquam exercitationem aliquam eveniet ratione libero
        provident, repellendus, laboriosam voluptates laudantium sit expedita
        esse necessitatibus sequi sed a non, voluptas cumque. Repellat quod,
        quos reiciendis velit debitis amet fuga quae vero esse quas, similique
        corrupti delectus explicabo, eos magnam atque. Eaque adipisci ad dicta
        delectus, totam inventore? Porro, dolores pariatur delectus natus autem
        voluptates ipsum cumque molestias ratione id magni, temporibus hic sed
        repellat atque provident non doloremque ullam accusamus accusantium
        consequuntur enim praesentium voluptate debitis. Delectus enim, nihil
        aut veniam dolorem quae ducimus? Repellendus voluptatem doloremque
        fugiat facere aspernatur perspiciatis quo assumenda recusandae,
        explicabo aliquam, deserunt numquam commodi beatae modi aperiam nam
        reiciendis eos tempore amet atque sint magnam iste, quisquam molestias?
        Quas doloremque culpa, facilis voluptatem dolor laboriosam quod,
        reiciendis ipsa maxime voluptates recusandae necessitatibus! Dolores
        ipsa id mollitia, asperiores libero corporis voluptatum delectus,
        doloremque earum minus iste quas, cumque adipisci totam sapiente aliquid
        maiores quaerat alias in reiciendis tempora ullam. Nulla consectetur et
        aut. Esse dolores pariatur rerum a, dolorum quibusdam quaerat quo
        explicabo ducimus impedit perspiciatis eum eos obcaecati at ipsum
        necessitatibus ad delectus consectetur neque voluptate eligendi libero
        ea. Nostrum temporibus aspernatur vero eum iste libero odit voluptates
        explicabo recusandae pariatur odio consequuntur labore necessitatibus ex
        quos suscipit dolor magni incidunt, mollitia distinctio illum est!
        Perspiciatis voluptates ipsam asperiores iusto laboriosam eaque
        voluptatum quia maxime? Unde tenetur a voluptas laboriosam deleniti
        eligendi non, debitis eum dicta ipsam blanditiis aspernatur consectetur
        quaerat quibusdam, accusamus sed voluptatem quod dolorem incidunt cumque
        excepturi aperiam corrupti minima laborum. Magnam asperiores ea debitis
        aspernatur vitae cumque saepe nesciunt, voluptate nam ad necessitatibus?
        Facilis nam sint soluta sit tempore, ut laborum. Dolorem exercitationem
        soluta, consectetur quo obcaecati saepe? Ipsum, minima quos veniam sunt
        quaerat repudiandae, magnam perferendis eveniet soluta sed autem modi,
        officia nesciunt necessitatibus atque. Necessitatibus voluptatum
        mollitia ducimus modi assumenda tempore quisquam suscipit iusto ex,
        nemo, provident autem non? Velit officiis quia totam in tenetur hic
        veritatis esse ipsa odio minus, ex quasi debitis neque eius? Quo
        cupiditate vitae provident consectetur dolorem natus ullam. Quia
        distinctio perspiciatis molestias, nemo fuga modi dignissimos accusamus
        aliquam accusantium, a itaque ex recusandae praesentium minima incidunt
        consequuntur, nostrum nesciunt quam dolorem deleniti aperiam vel. Quasi
        vero delectus, eveniet impedit id eaque doloremque. Consequuntur magni
        accusamus quia, quisquam explicabo, aspernatur ab repudiandae eaque
        blanditiis quo, quasi fugit sed eius architecto quis a laborum officiis
        voluptatem illum. Vitae atque ea sint accusantium, a sed id praesentium
        temporibus officia nisi voluptatem eaque laborum quidem necessitatibus
        ex! Illo quibusdam pariatur perferendis quia necessitatibus fuga quis,
        sapiente facere officiis suscipit doloribus maxime ducimus aperiam at
        impedit eveniet vitae ipsum molestias excepturi quae repellat, omnis ad
        saepe sunt. In, a soluta. Quasi consequatur ad iusto voluptates
        exercitationem. Alias dicta incidunt repudiandae labore repellendus
        fugit, deserunt impedit distinctio amet reiciendis, voluptates in non
        aliquam magni, neque ducimus dignissimos sint maxime adipisci similique
        voluptatibus eos pariatur. Accusantium, fugit. Optio, dolorum maxime
        temporibus autem voluptatem ratione tempora, amet unde vel, debitis illo
        consequuntur blanditiis a. Labore, deleniti. Saepe sunt est dolor
        necessitatibus unde quasi incidunt iusto ab sequi omnis corporis cum
        vitae doloremque, temporibus aliquid rem error, minima quae perferendis
        repudiandae iste harum aspernatur nihil. Distinctio et laborum
        blanditiis, doloribus nihil fugit vitae, minus dicta repellat aperiam
        aspernatur corrupti similique ea nobis ut cumque consequuntur hic
        possimus. Esse similique amet commodi vero dolor quae iure ut eaque,
        velit eveniet laboriosam nam tempore dolorum numquam repudiandae
        doloribus provident ipsum, eius incidunt ratione nemo consectetur. Quis,
        quasi ad ab quibusdam fugit consectetur nisi facilis odit, repellendus
        repellat voluptas magni numquam earum explicabo aliquid placeat suscipit
        consequatur in enim magnam, eveniet molestias. Assumenda nisi cupiditate
        nobis ratione accusamus neque ex ea reprehenderit, explicabo animi.
        Deserunt iure nostrum amet. Accusantium vero et deserunt sunt error eos,
        mollitia aperiam quisquam autem ex officiis unde quo numquam inventore
        ipsa suscipit doloremque culpa voluptates fugit temporibus placeat.
        Dignissimos pariatur dolorem exercitationem deleniti, repellendus nihil
        harum. Ipsum sequi iste fuga modi saepe magni. Minima nihil optio,
        laudantium soluta delectus, corrupti non, nobis deserunt quo sequi
        molestiae assumenda. Ullam, fugit hic laudantium voluptate vero eum
        sequi delectus quod. Architecto et commodi nam ea hic minus? Eum sit
        assumenda iste magnam facere sint voluptatem perspiciatis similique
        corporis aspernatur exercitationem at laborum, modi dicta placeat cum
        ad! Veniam enim veritatis repudiandae ut necessitatibus quis est!
        Quibusdam saepe dignissimos impedit, distinctio soluta earum nisi
        assumenda laudantium. Debitis voluptate asperiores alias est beatae
        fugit id ipsam similique vitae totam ipsa quibusdam, eligendi
        reiciendis.
      </p>
    </div>
  );
};

export default PopUpModal;
