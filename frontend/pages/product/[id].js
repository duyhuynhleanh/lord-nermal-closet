import SingleProductComponent from '../../components/SingleProduct'

const SingleProductPage = ({ query }) => {
  return <SingleProductComponent id={query.id} />
}

export default SingleProductPage
