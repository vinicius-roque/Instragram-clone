export default function Stories() {
    const stories = [
        "9gag",
        "meowed",
        "barked",
        "nathanwpylestrangeplanet",
        "wawawicomics",
        "respondeai",
        "filomoderna",
        "memeriagourmet",
    ]

    return (
        <div class="stories">
            {stories.map(story => <Story user={story} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={"assets/img/" + props.user + ".svg"} alt={props.user + "profile image"} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    );
}