// 事前にZoomVideoSDKをインストールする必要がある
// > npm install @zoom/videosdk --save
import ZoomVideo from '@zoom/videosdk';
import {
    ConnectionState
  } from '@zoom/videosdk';
  // status report
  client.on('connection-change', (payload) => {
    if (payload.state === ConnectionState.Connected) {
        console.log('[debug] client on connected.');
    } else if(payload.state === ConnectionState.Reconnecting){
        console.log('[debug] client on reconnecting.');
    }
  });
  // remote stream render
  client.on('peer-video-state-change', async (payload) => {
    const { action, userId } = payload;
    if (action === 'Start') {
      await stream.renderVideo(canvas, userId, width, height, x, y, quality);
    } else if (action === 'Stop') {
      await stream.stopRenderVideo(canvas);
    }
  });

async function join(topic,signagure,name,password) {
    const client = ZoomVideo.createClient();
    await client.init('en-US', 'Global');
    await client.join(topic,signature,name,password).then(() => {
        console.log('Join meeting success');
      }).catch((error) => {
        console.error(error);
      });
}

//leave
client.leave();

//end session
if(client.isHost()){
    client.leave(true);
}

//create media stream
const stream = client.getMediaStream();
