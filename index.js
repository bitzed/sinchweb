// 事前にZoomVideoSDKをインストールする必要がある
// > npm install @zoom/videosdk --save
import ZoomVideo from '@zoom/videosdk';

async function join(topic,signagure,name,password) {
    const client = ZoomVideo.createClient();
    await client.init('en-US', 'Global');
    await client.join(topic,signature,name,password);
}