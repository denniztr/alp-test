import { 
  BackgroundComponent, 
  Laboratory, 
  Gallery, 
  FormSection,
} from '../../components/index'


export default function MainPage({ setAnchorId }) {
  return (
      <>
        <BackgroundComponent />
        <Laboratory setAnchorId={setAnchorId} />
        <Gallery setAnchorId={setAnchorId} />
        <FormSection setAnchorId={setAnchorId} />
      </>
  );
}
