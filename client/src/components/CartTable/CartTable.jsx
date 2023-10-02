import ModalImage from 'react-modal-image';
import { Link } from 'react-router-dom';
import * as routePath from '../../routes/routePath';

const CartTable = ({ p }) => {
  const { title, images, brand, price, color, count, shipping, slug } = p;

  return (
    <tbody className="w-full">
      <tr>
        <td className="p-2" style={{ width: '100px' }}>
          <div className="flex items-center justify-center" style={{ height: '100px' }}>
            <ModalImage small={images[0]} large={images[0]} alt="Product" />
          </div>
        </td>
        <td className="p-2 text-blue-400">
          <Link to={`${routePath.VIEW_PRODUCT}/${slug}`}>{title}</Link>
        </td>
        <td className="p-2">${price.toFixed(2)}</td>
        <td className="p-2">{brand}</td>
        <td className="p-2">{color}</td>
        <td className="p-2">{count}</td>
        <td className="p-2">{shipping}</td>
        <td className="p-2">
          <button className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartTable;
