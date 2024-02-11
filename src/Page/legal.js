import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import Avantage from "../Component/avantage";
function Legal() {
    const { t } = useTranslation();

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Mention Legal</h1>
                    <div className="mt-8">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet massa eu nibh commodo lobortis. In quis pharetra tellus. Vivamus mattis metus sem, sed faucibus eros ullamcorper quis. Etiam condimentum leo vel dolor malesuada semper sed ut ipsum. Ut sem ipsum, efficitur sit amet nisi eget, congue gravida neque. Etiam tristique, elit vel ultricies commodo, nisl est euismod magna, eu dictum magna eros elementum quam. Fusce viverra, massa quis aliquam convallis, erat ex ultricies velit, a rutrum ante est vitae neque. Quisque semper ante ut tortor ullamcorper, nec suscipit odio bibendum. Sed sollicitudin enim ut sem sollicitudin aliquam.
                            In mi ex, accumsan vel bibendum in, porta at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis odio vel elementum aliquam. Donec lobortis, ex non hendrerit interdum, quam velit ultrices quam, sed convallis libero nulla id tortor. Fusce id lacinia est, id dictum augue. Phasellus ac rutrum lectus, ultricies mollis eros. Morbi aliquam maximus dignissim. Nunc ac porta lorem. Suspendisse fringilla facilisis pellentesque. Aenean tincidunt maximus felis, quis mollis libero dignissim id. Proin ut egestas nunc.
                            Etiam fringilla lectus non ligula maximus, sed blandit nibh consectetur. Pellentesque convallis tortor non libero posuere laoreet. Aliquam scelerisque dolor at purus dapibus volutpat. Donec viverra, arcu eget sagittis feugiat, lorem est viverra arcu, id hendrerit est velit nec lorem. Etiam eu tristique mauris, eu bibendum felis. In hac habitasse platea dictumst. Nam fermentum felis velit, a accumsan nunc varius vitae. Vestibulum luctus tellus quis massa ullamcorper, sit amet consequat ante posuere. Ut eu iaculis turpis.
                            Proin mollis viverra vehicula. Etiam eu eros eu quam mollis lobortis quis dignissim elit. Nullam mattis ornare nisl vel facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ut sem pretium diam tincidunt vestibulum sed vitae felis. Vestibulum sed sem viverra justo consectetur varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sit amet egestas arcu. Integer et orci ut ipsum pretium rhoncus. Mauris tincidunt ex magna, et eleifend nunc blandit non. Maecenas eu ex quis eros lobortis interdum et in est. Praesent laoreet sem vitae lectus ullamcorper suscipit. Cras et efficitur nisl. Fusce dictum ornare lorem. Sed rutrum justo nibh, ut dignissim eros tristique nec.
                            Ut luctus sapien a condimentum efficitur. Suspendisse pharetra neque ut eros gravida egestas. In velit quam, luctus a lacinia ac, pellentesque sed sapien. Phasellus quis turpis ultricies, semper dui sed, vehicula nulla. Aenean ac arcu vitae quam vulputate vestibulum sit amet sollicitudin augue. Mauris turpis enim, pellentesque non ullamcorper ac, commodo non quam. Suspendisse luctus, lacus nec dictum lobortis, odio diam malesuada risus, vitae fermentum mauris lectus quis mauris. Morbi ut euismod ante. Fusce lorem ligula, ultrices eu semper eu, semper eget lectus. Curabitur mattis sapien sed tellus vehicula euismod. Vivamus vulputate ligula nec libero pulvinar, eget ullamcorper lectus dignissim. Cras in enim ante. Pellentesque tincidunt congue elit, non tristique nibh posuere nec.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Legal;