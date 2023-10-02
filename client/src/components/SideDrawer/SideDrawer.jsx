import {Drawer} from 'antd';
import { BsCart3 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as routePath from '../../routes/routePath'
const SideDrawer = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {drawer,cart} = useSelector(state=>({...state}));
	const handleClick=()=>{
		dispatch({type:'SET_VISIBLE',payload:false});
		navigate(routePath.SHOP)
	}
	return (
		<Drawer visible={drawer} 
		onClose={()=>{
			dispatch({
				type:"SET_VISIBLE",
				payload:false
			})
		}}
		placement='right'
		title={`Cart/${cart.length} ${cart.length>1 ? "Products" : "Product"}`}
		closable={false}
		>
			<div  className='flex flex-col'>
			{cart && cart.length>0 && cart.map(c=>(
				<div  key={c._id} className='flex-col'>
					<img src={c.images[0]}  className='h-52' />
					<p className='text-xl bg-lime-500 px-6 py-3 w-full'>{c.title} x {c.count}</p>
				</div>
			))}
			<button onClick={handleClick} className='btn inline-flex mx-2 pl-28 py-3 bg-[tomato] mt-2 rounded text-md text-center font-semibold'> 
			<BsCart3/> Goto Cart
			</button>
			</div>
		</Drawer>
			
	);
}

export default SideDrawer;
