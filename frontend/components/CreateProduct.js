import useForm from '../lib/useForm'
import Form from './styles/Form'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import DisplayError from './ErrorMessage'
import { ALL_PRODUCTS_QUERY } from './Products'
import Router from 'next/router'

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Tên sản phẩm',
    price: 1000,
    description: 'Nhập mô tả về sản phẩm muốn bán!',
  })

  const [createProduct, { data, error, loading }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [
        {
          query: ALL_PRODUCTS_QUERY,
        },
      ],
    }
  )
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()
        const res = await createProduct()
        clearForm()
        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
        })
      }}
    >
      <DisplayError error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor='image'>
          Ảnh sản phẩm
          <input type='file' id='image' name='image' onChange={handleChange} />
        </label>
        <label htmlFor='name'>
          Tên sản phẩm
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='price'>
          Giá tiền
          <input
            type='number'
            id='price'
            name='price'
            placeholder='price'
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='description'>
          Mô tả
          <textarea
            id='description'
            name='description'
            placeholder='description'
            value={inputs.description}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type='submit'>+ Thêm sản phẩm</button>
      </fieldset>
    </Form>
  )
}

export default CreateProduct
