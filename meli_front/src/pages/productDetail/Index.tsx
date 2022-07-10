import { DetailComponent } from "../../components/detail/DetailComponent"
import { BreadCrumbComponent } from "../../components/ui/BreadCrumbComponent"

const dummy_product = {
  id: "1",
  name: "Ipod Touch 32GB",
  price: 1900,
  quantity: 22,
  status: "Nuevo",
  description: "El nuevo iPod touch. Diversión a la máxima potencia. Tu música te sigue el ritmo." +
"¿Te gusta la música? El iPod touch ahora ofrece hasta 32 GB de almacenamiento para que puedas guardar más canciones que nunca. Suscríbete a Apple Music para escuchar hasta 50 millones de canciones y descargar tus favoritas, o llena tu iPod touch con las que más te gustan del iTunes Store." +
  "Con más poder todos ganan." +
  "Gracias al chip A10 Fusion, el iPod touch te ofrece una gran experiencia de juego. La acción es más fluida, los detalles son más nítidos y todo se siente mucho más real. El chip A10 Fusion ofrece un rendimiento hasta dos veces más rápido y gráficos tres veces mejores, sin disminuir la duración de la batería del nuevo iPod touch. Con él puedes disfrutar de juegos y apps de realidad aumentada, y todo se siente más rápido y fluido." +
  "Pantalla Retina de 4 pulgadas" + 
  "La pantalla del iPod touch es perfecta para ver tus mensajes, fotos, videos y más, ya que todo se ve nítido y real. Además, como sólo tiene 6.1 mm de grosor y pesa 88 gramos, puedes llevarlo siempre contigo. " +
  "iOS 13 es el sistema operativo móvil más avanzado del mundo." +
  "iOS le da vida al iPod touch de una forma increíblemente personal y poderosa. Te brinda acceso a millones de apps y juegos en el App Store, te permite crear y expresarte fácilmente cuando estás conectado con tus amigos, y sus avanzadas tecnologías protegen tu privacidad.",
  image: "https://http2.mlstatic.com/D_NQ_NP_955930-MLA45878166410_052021-O.webp",
  category: "Category 1",
  subcategory: "Subcategory 1",
  tags: ["tag 1", "tag 2"],
  attributes: [
    {
      name: "Attribute 1",
      value: "Value 1",
    },
    {
      name: "Attribute 2",

      value: "Value 2",
    },
  ],
}

export const ProductDetailPage = () => {
  return (
    <>
      <BreadCrumbComponent />
      <DetailComponent product={dummy_product} />
    </>
  )
}
