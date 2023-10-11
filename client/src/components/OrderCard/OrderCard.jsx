import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import * as routePath from '../../routes/routePath';
import {TbFileInvoice} from 'react-icons/tb';
import { useSelector } from "react-redux";
import { deleteOrderHistory } from "../../functions/orderFunctions";
import toast from "react-hot-toast";

const OrderCard = ({order,loadOrder}) => {
	const {user} = useSelector(state=>({...state}))

		// handle cancel order
		const handleCancel = (e)=>{
			e.preventDefault()
			toast.loading('loading')
			console.log(order._id)
			deleteOrderHistory(order._id,user?.token)
			.then(()=>{
				toast.dismiss()
				toast.success('order cancelled!')
				loadOrder()
			}).catch(err=>{
				toast.dismiss()
				toast.error(err.message)

			})
		}
	return (
		<div className="mt-5 mb-10 ">
			<div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-slate-100">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Item</th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Quantity</th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Price</th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Color</th>
            </tr>
          </thead>
          <tbody>
			{order.products.map(p=>
            <tr key={p._id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
			<div className="flex " style={{ height: '60px' }}>
            <ModalImage small={p.images[0]} large={p.images[0]} alt="Product" />
			<div className="flex flex-col">
	<Link to={`${routePath.VIEW_PRODUCT}/${p.slug}`} className="text-xl text-blue-600">{p.title}</Link>
	<p className="ml-2 text-gray-600"> Brand:{p.brand}</p>
	</div>
          </div>
			</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-gray-200">{p.count}</td>
              <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{p.count} x {p.price} = ${p.count * p.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {p.color}
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-row justify-between">
	<p className="text-gray-600 text-sm">Payment ID: <span className="text-blue-500"> {order.paymentId} </span></p>
	<p className="text-gray-600 text-sm">Status: <span className={`${order.status === 'cancelled' ? 'text-red-700' : order.status ==='processing' ? 'text-green-400': order.status ==='accepted' ? 'text-blue-600':''} font-semibold capitalize`} >{order.status}</span> </p>
	<p className="text-gray-600 text-sm">Total Price : <span className="text-black ">${order.totalPrice}</span> </p>
	{order && order.status === 'accepted' || order.status === "delivered" ? 
	<>
	<PDFDownloadLink
      document={
        <Document>
          <Page style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>Invoice</Text>
              <View style={styles.details}>
                <Text>Order ID: {order._id}</Text>
                <Text>User: {user?.name}</Text>
              </View>
              <Text style={styles.sectionTitle}>Products</Text>
              <View style={styles.productList}>
                {order.products.map((product) => (
                  <View style={styles.product} key={product._id}>
                    <Text>{product.title}</Text>
                    <Text>Price: ${product.price}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.totalPrice}>Total Price: ${order.totalPrice}</Text>
            </View>
          </Page>
        </Document>
      }
      fileName="invoice.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : <button className='btn bg-green-600 flex py-2 px-5 rounded'> <TbFileInvoice className="mt-1" /> Invoice</button>
      }
    </PDFDownloadLink>
	</>
	:
	<>
	{order && order.status === 'cancelled' ? <></>
	:
	<button onClick={handleCancel} className="btn bg-red-500 py-2 px-5 rounded" >Cancel</button>

	}
	</>
	}
	
</div>

		</div>
	);
}
const styles = StyleSheet.create({
	page: {
	  flexDirection: 'column',
	  padding: 20,
	},
	section: {
	  flexGrow: 1,
	},
	title: {
	  fontSize: 24,
	  marginBottom: 20,
	  textAlign: 'center',
	},
	details: {
	  marginBottom: 20,
	},
	sectionTitle: {
	  fontSize: 18,
	  marginBottom: 10,
	},
	productList: {
	  marginBottom: 10,
	},
	product: {
	  marginBottom: 10,
	},
	totalPrice: {
	  fontSize: 16,
	  fontWeight: 'bold',
	  textAlign: 'right',
	},
  });
  
export default OrderCard;
