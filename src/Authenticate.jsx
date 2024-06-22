import { Modal } from "@carbon/react";


function Authenticate(){
    return(
        () => {
            /**
             * Simple state manager for modals.
             */
            const ModalStateManager = ({
              renderLauncher: LauncherContent,
              children: ModalContent
            }) => {
              const [open, setOpen] = useState(false);
              return <>
                  {!ModalContent || typeof document === 'undefined' ? null : ReactDOM.createPortal(<ModalContent open={open} setOpen={setOpen} />, document.body)}
                  {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
                </>;
            };
            const button = useRef();
            return <ModalStateManager renderLauncher={({
              setOpen
            }) => <Button ref={button} onClick={() => setOpen(true)}>
                    Launch modal
                  </Button>}>
                {({
                open,
                setOpen
              }) => <Modal launcherButtonRef={button} modalHeading="Add a custom domain" modalLabel="Account resources" primaryButtonText="Add" secondaryButtonText="Cancel" open={open} onRequestClose={() => setOpen(false)}>
                    <p style={{
                  marginBottom: '1rem'
                }}>
                      Custom domains direct requests for your apps in this Cloud Foundry
                      organization to a URL that you own. A custom domain can be a shared
                      domain, a shared subdomain, or a shared domain and host.
                    </p>
                    <TextInput data-modal-primary-focus id="text-input-1" labelText="Domain name" placeholder="e.g. github.com" style={{
                  marginBottom: '1rem'
                }} />
                    <Select id="select-1" defaultValue="us-south" labelText="Region">
                      <SelectItem value="us-south" text="US South" />
                      <SelectItem value="us-east" text="US East" />
                    </Select>
                  </Modal>}
              </ModalStateManager>;
          }
    );
}


export default Authenticate