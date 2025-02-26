import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin </Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// export default function AddCabin() {
//   const [isOpenModal, setisOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setisOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setisOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setisOpenModal(false)} />{" "}
//         </Modal>
//       )}
//     </div>
//   );
// }
