import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="
                8881aa1e-593e-415d-bcfb-895fbde7b0bf"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    );
}

export default ChatsPage