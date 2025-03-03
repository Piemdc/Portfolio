import RealsWrapper from "@/Components/Molecules/Reals-wrapper";
import {useEffect} from "react";


export default function SpotifyContainer(SpotifyTrack){

    useEffect(() => {
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            const element = document.getElementById('embed-iframe');
            const options = {
                width: '100%',
                height: '80px',
                theme: 'dark',
                uri: 'spotify:track:' + SpotifyTrack.SpotifyTrack
            };
            const callback = (EmbedController) => {
            };
            IFrameAPI.createController(element, options, callback);
        };
    })


    return (
        <section id={'spotify'} className={` hidden lg:block fixed bottom-4 right-4 z-50`}>
            <div id="embed-iframe"></div>
        </section>
    )
}