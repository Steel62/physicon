export function coursesFetch() {
    return async dispatch => {
        try {
            const response = await fetch('https://krapipl.imumk.ru:8443/api/mobilev1/update', {
                method: 'post',
                body: JSON.stringify({data: ''}),
                headers: {
                    'Content-type': 'application/json',
                },
            });

            if (!response.ok){
                dispatch(doNothing());
                return
            }

            const data = await response.json();

            if (data.errorMessage){
                console.log(data.errorMessage);
                dispatch(doNothing());
                return;
            }
            dispatch(addCourses(data.items));
        } catch (e) {
            console.log(e.message);
            dispatch(doNothing());
        }
    };
}


export function fakeFetch() {
    return dispatch => {
        const responce = '{"items":[{"courseId":"80","extId":"Physicon_IMUMK_Course_267727","courseHash":"318195250115271701719214121150250168217123912252217","title":"Рабочая тетрадь. Алгебра, 7 класс","grade":"7","genre":"Рабочая тетрадь","subject":"Алгебра","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267727","progress":0,"description":"280 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/103","google_id":"ru.fizikon.physicon_imumk_course_267727","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"81","extId":"Physicon_IMUMK_Course_267728","courseHash":"20474204246309206195154243821962081072919715989470","title":"Рабочая тетрадь. Алгебра, 8 класс","grade":"8","genre":"Рабочая тетрадь","subject":"Алгебра","itunes_id":"ru.physicon.imumk.Physicon_IMUMK2_Course_267728","progress":0,"description":"220 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/104","google_id":"ru.fizikon.physicon_imumk_course_267728","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"82","extId":"Physicon_IMUMK_Course_267729","courseHash":"882101439242897615612422322382101124210129222068273","title":"Рабочая тетрадь. Алгебра, 9 класс","grade":"9","genre":"Рабочая тетрадь","subject":"Алгебра","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267729","progress":0,"description":"220 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/105","google_id":"ru.fizikon.physicon_imumk_course_267729","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"55","extId":"Physicon_IMUMK_Course_267724","courseHash":"422521216518694124571452409016321213367253229850250","title":"Рабочая тетрадь. Естествознание, 5 класс","grade":"5","genre":"Рабочая тетрадь","subject":"Биология","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267724","progress":0,"description":"180 интерактивных заданий, \\n3 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-100","google_id":"ru.fizikon.physicon_imumk_course_267724","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"61","extId":"Physicon_IMUMK_Course_267720","courseHash":"10999636811136421382541264422812821198911319259229","title":"Рабочая тетрадь. Биология, 6 класс","grade":"6","genre":"Рабочая тетрадь","subject":"Биология","itunes_id":"ru.physicon.imumk.Physicon_IMUMK2_Course_267720","progress":0,"description":"190 интерактивных заданий, \\n3 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-85","google_id":"ru.fizikon.physicon_imumk_course_267720","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"27","extId":"Physicon_IMUMK_Course_267721","courseHash":"80229147931161614971215133791841683421713251235181196","title":"Рабочая тетрадь. Биология, 7 класс","grade":"7","genre":"Рабочая тетрадь","subject":"Биология","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267721","progress":0,"description":"300 интерактивных заданий, \\r\\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-86","google_id":"ru.fizikon.physicon_imumk_course_267721","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"50","extId":"Physicon_IMUMK_Course_267722","courseHash":"5818797474136332411412614684972072212433422963116","title":"Рабочая тетрадь. Биология, 8 класс","grade":"8","genre":"Рабочая тетрадь","subject":"Биология","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267722","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-87","google_id":"ru.fizikon.physicon_imumk_course_267722","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"79","extId":"Physicon_IMUMK_Course_278049","courseHash":"22819224714622969842532207252132142569720922961923","title":"Задачник. Биология: 8–11 класс","grade":"8;9;10;11","genre":"Задачник","subject":"Биология","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_278049","progress":0,"description":"700 интерактивных заданий и 7 контрольных работ","status":"","price":1000,"shopUrl":"https://multiring.ru/shop/details/-110","google_id":"ru.fizikon.physicon_imumk_course_278049","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"51","extId":"Physicon_IMUMK_Course_267723","courseHash":"13913869341007279197220128146718313103531814142","title":"Рабочая тетрадь. Биология, 9 класс","grade":"9","genre":"Рабочая тетрадь","subject":"Биология","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267723","progress":0,"description":"300 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-88","google_id":"ru.fizikon.physicon_imumk_course_267723","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4415","extId":"Physicon_IMUMK_Course_374258","courseHash":"3121521826135187942312620974249198302322059373106196","title":"Тренажёр по подготовке к ЕГЭ-2019. Биология ","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"Биология","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_374258","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9012","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"56","extId":"Physicon_IMUMK_Course_267736","courseHash":"81551377359539910123116622620967247147743190202","title":"Рабочая тетрадь. География, 6 класс","grade":"6","genre":"Рабочая тетрадь","subject":"География","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267736","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-91","google_id":"ru.fizikon.physicon_imumk_course_267736","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"57","extId":"Physicon_IMUMK_Course_267737","courseHash":"16014115160108720105651821559417123420892932821528","title":"Рабочая тетрадь. География, 7 класс","grade":"7","genre":"Рабочая тетрадь","subject":"География","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267737","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-92","google_id":"ru.fizikon.physicon_imumk_course_267737","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"53","extId":"Physicon_IMUMK_Course_267738","courseHash":"13321920988938414920012519175911237510073152815786","title":"Рабочая тетрадь. География, 8 класс","grade":"8","genre":"Рабочая тетрадь","subject":"География","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267738","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-93","google_id":"ru.fizikon.physicon_imumk_course_267738","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"58","extId":"Physicon_IMUMK_Course_267739","courseHash":"1113142155591601951151151292551542291017424120312017195","title":"Рабочая тетрадь. География, 9 класс","grade":"9","genre":"Рабочая тетрадь","subject":"География","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267739","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-94","google_id":"ru.fizikon.physicon_imumk_course_267739","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4416","extId":"Physicon_IMUMK_Course_374178","courseHash":"58863924517346916919619080817643154215748162","title":"Тренажёр по подготовке к ЕГЭ-2019. География","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"География","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_374178","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9013","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"76","extId":"Physicon_IMUMK_Course_267730","courseHash":"2442286921131968831812441732610715281130168248210","title":"Рабочая тетрадь. Геометрия, 7 класс","grade":"7","genre":"Рабочая тетрадь","subject":"Геометрия","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267730","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/106","google_id":"ru.fizikon.physicon_imumk_course_267730","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"77","extId":"Physicon_IMUMK_Course_267731","courseHash":"2710822424218610324916925531961391141619715312622210685","title":"Рабочая тетрадь. Геометрия, 8 класс","grade":"8","genre":"Рабочая тетрадь","subject":"Геометрия","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267731","progress":0,"description":"170 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/107","google_id":"ru.fizikon.physicon_imumk_course_267731","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"78","extId":"Physicon_IMUMK_Course_267732","courseHash":"23119339131175260572625119835509416714361402418","title":"Рабочая тетрадь. Геометрия, 9 класс","grade":"9","genre":"Рабочая тетрадь","subject":"Геометрия","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267732","progress":0,"description":"200 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/108","google_id":"ru.fizikon.physicon_imumk_course_267732","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"67","extId":"Physicon_IMUMK_Course_267733","courseHash":"219215114782452362311032722612815863118195112321441579","title":"Рабочая тетрадь. Информатика, 7 класс","grade":"7","genre":"Рабочая тетрадь","subject":"Информатика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267733","progress":0,"description":"140 интерактивных заданий, \\r\\n2 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/109","google_id":"ru.fizikon.physicon_imumk_course_267733","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"69","extId":"Physicon_IMUMK_Course_267734","courseHash":"2514320124322329215657337561511690651532409118325","title":"Рабочая тетрадь. Информатика, 8 класс","grade":"8","genre":"Рабочая тетрадь","subject":"Информатика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267734","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/110","google_id":"ru.fizikon.physicon_imumk_course_267734","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"68","extId":"Physicon_IMUMK_Course_267735","courseHash":"6288141171291225912750236250154173355521650475036","title":"Рабочая тетрадь. Информатика, 9 класс","grade":"9","genre":"Рабочая тетрадь","subject":"Информатика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267735","progress":0,"description":"250 интерактивных заданий, \\r\\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/111","google_id":"ru.fizikon.physicon_imumk_course_267735","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"48","extId":"Physicon_IMUMK_Course_267740","courseHash":"1141261785317524457145385922711916414323023115810039","title":"Рабочая тетрадь. История, 5 класс","grade":"5","genre":"Рабочая тетрадь","subject":"История","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267740","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-95","google_id":"ru.fizikon.physicon_imumk_course_267740","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"65","extId":"Physicon_IMUMK_Course_267741","courseHash":"12944471321511331991849822251895619323197135165234","title":"Рабочая тетрадь. История, 6 класс","grade":"6","genre":"Рабочая тетрадь","subject":"История","itunes_id":"ru.physicon.imumk.Physicon_IMUMK2_Course_267741","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-96","google_id":"ru.fizikon.physicon_imumk_course_267741","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"64","extId":"Physicon_IMUMK_Course_267742","courseHash":"2302162421724520411122022081218762312221649871216758","title":"Рабочая тетрадь. История, 7 класс","grade":"7","genre":"Рабочая тетрадь","subject":"История","itunes_id":"ru.physicon.imumk.Physicon_IMUMK2_Course_267742","progress":0,"description":"290 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-97","google_id":"ru.fizikon.physicon_imumk_course_267742","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"62","extId":"Physicon_IMUMK_Course_267743","courseHash":"1692221266432153065410011324153741102350235174218","title":"Рабочая тетрадь. История, 8 класс","grade":"8","genre":"Рабочая тетрадь","subject":"История","itunes_id":"ru.physicon.imumk.Physicon_IMUMK2_Course_267743","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-98","google_id":"ru.fizikon.physicon_imumk_course_267743","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"63","extId":"Physicon_IMUMK_Course_267744","courseHash":"7831119241126912461101181341572151633237245243109210","title":"Рабочая тетрадь. История, 9 класс","grade":"9","genre":"Рабочая тетрадь","subject":"История","itunes_id":"ru.physicon.imumk.Physicon_IMUMK2_Course_267744","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-99","google_id":"ru.fizikon.physicon_imumk_course_267744","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4411","extId":"Physicon_IMUMK_Course_373882","courseHash":"5869253146215375210819345111072201411998312913872100","title":"Тренажёр по подготовке к ЕГЭ-2019. История","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"История","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_373882","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9015","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4552","extId":"Physicon_IMUMK_Course_374400","courseHash":"83235102251115635721832163089791549473475627243","title":"Тренажёр по подготовке к ЕГЭ-2019. Литература","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"Литература","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_374400","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9016","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"74","extId":"Physicon_IMUMK_Course_267725","courseHash":"236551492074019578831875824913174165239418813024130","title":"Рабочая тетрадь. Математика, 5 класс","grade":"5","genre":"Рабочая тетрадь","subject":"Математика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267725","progress":0,"description":"220 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-104","google_id":"ru.fizikon.physicon_imumk_course_267725","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"75","extId":"Physicon_IMUMK_Course_267726","courseHash":"15823711134221110130202232220175183212215522176229236216","title":"Рабочая тетрадь. Математика, 6 класс","grade":"6","genre":"Рабочая тетрадь","subject":"Математика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267726","progress":0,"description":"240 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-105","google_id":"ru.fizikon.physicon_imumk_course_267726","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4405","extId":"Physicon_IMUMK_Course_373501","courseHash":"179209312331051011991018437208809319716617211618730184","title":"Тренажёр по подготовке к ЕГЭ-2019. Математика (базовый)","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"Математика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_373501","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9017","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4406","extId":"Physicon_IMUMK_Course_373558","courseHash":"3011475252766115323619118714391935920613323062210160","title":"Тренажёр по подготовке к ЕГЭ-2019. Математика (профильный)","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"Математика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_373558","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9018","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4410","extId":"Physicon_IMUMK_Course_373810","courseHash":"2413754671211725113621832531681498711105113149291","title":"Тренажёр по подготовке к ЕГЭ-2019. Обществознание","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"Обществознание","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_373810","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9019","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"111","extId":"Physicon_IMUMK_Course_280864","courseHash":"53103206223208150212165202200209118203931201602033053","title":"Рабочая тетрадь. Окружающий мир, 1 класс","grade":"1","genre":"Рабочая тетрадь","subject":"Окружающий мир","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_280864","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/183","google_id":"ru.fizikon.physicon_imumk_course_280864","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"108","extId":"Physicon_IMUMK_Course_281595","courseHash":"201224012412255215561483548901231521022041168614247","title":"Рабочая тетрадь. Окружающий мир, 2 класс","grade":"2","genre":"Рабочая тетрадь","subject":"Окружающий мир","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_281595","progress":0,"description":"270 интерактивных заданий,6 тематических контрольных работ","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/184","google_id":"ru.fizikon.physicon_imumk_course_281595","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"109","extId":"Physicon_IMUMK_Course_282584","courseHash":"2176074512053140186891491811418718912715820215941183","title":"Рабочая тетрадь. Окружающий мир, 3 класс","grade":"3","genre":"Рабочая тетрадь","subject":"Окружающий мир","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_282584","progress":0,"description":"250 интерактивных заданий, 4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/185","google_id":"ru.fizikon.physicon_imumk_course_282584","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"110","extId":"Physicon_IMUMK_Course_283885","courseHash":"10225067929277116123962191781591417820411917123413759","title":"Рабочая тетрадь. Окружающий мир, 4 класс","grade":"4","genre":"Рабочая тетрадь","subject":"Окружающий мир","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_283885","progress":0,"description":"280 интерактивных заданий, 4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/186","google_id":"ru.fizikon.physicon_imumk_course_283885","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4188","extId":"Physicon_IMUMK_Course_317823","courseHash":"32070215100222101782510791147147317923463387202","title":"Рабочая тетрадь. Робототехника, 1-4 классы","grade":"1;2;3;4","genre":"Рабочая тетрадь","subject":"Робототехника","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_317823","progress":0,"description":"","status":"","price":400,"shopUrl":"https://multiring.ru/shop/details/258","google_id":"ru.fizikon.physicon_imumk_course_317823","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4169","extId":"Physicon_IMUMK_Course_316798","courseHash":"102181128201721941452331922119621420914711917164122255126","title":"Рабочая тетрадь. Робототехника, 7-9 классы","grade":"7;8;9","genre":"Рабочая тетрадь","subject":"Робототехника","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_316798","progress":0,"description":"","status":"","price":400,"shopUrl":"https://multiring.ru/shop/details/259","google_id":"ru.fizikon.physicon_imumk_course_316798","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4170","extId":"Physicon_IMUMK_Course_317789","courseHash":"60902181565911345632427124254250222162265019814838","title":"Рабочая тетрадь. Робототехника, 10-11 классы","grade":"10;11","genre":"Рабочая тетрадь","subject":"Робототехника","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_317789","progress":0,"description":"","status":"","price":400,"shopUrl":"https://multiring.ru/shop/details/260","google_id":"ru.fizikon.physicon_imumk_course_317789","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"83","extId":"Physicon_IMUMK_Course_279189","courseHash":"40190168114206232247147871101601016128216133572458797","title":"Рабочая тетрадь. Русский язык, 7 класс","grade":"7","genre":"Рабочая тетрадь","subject":"Русский язык","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_279189","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-111","google_id":"ru.fizikon.physicon_imumk_course_279189","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"84","extId":"Physicon_IMUMK_Course_279539","courseHash":"1571017516519416716170201127811143010621024319418169179","title":"Рабочая тетрадь. Русский язык, 8 класс","grade":"8","genre":"Рабочая тетрадь","subject":"Русский язык","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_279539","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-112","google_id":"ru.fizikon.physicon_imumk_course_279539","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"85","extId":"Physicon_IMUMK_Course_279740","courseHash":"1115622524932243250202711141346015710912411024224213","title":"Рабочая тетрадь. Русский язык, 9 класс","grade":"9","genre":"Рабочая тетрадь","subject":"Русский язык","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_279740","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-113","google_id":"ru.fizikon.physicon_imumk_course_279740","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4409","extId":"Physicon_IMUMK_Course_373744","courseHash":"118128234155137234413024414912711021516212713611118725193","title":"Тренажёр по подготовке к ЕГЭ-2019. Русский язык ","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"Русский язык","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_373744","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9020","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"70","extId":"Physicon_IMUMK_Course_267715","courseHash":"318982151583878315557171149011202128245821843","title":"Рабочая тетрадь. Физика, 7 класс","grade":"7","genre":"Рабочая тетрадь","subject":"Физика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267715","progress":0,"description":"290 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/112","google_id":"ru.fizikon.physicon_imumk_course_267715","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"73","extId":"Physicon_IMUMK_Course_267716","courseHash":"47175416244243100681242271351311718421024611183191","title":"Рабочая тетрадь. Физика, 8 класс","grade":"8","genre":"Рабочая тетрадь","subject":"Физика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267716","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/113","google_id":"ru.fizikon.physicon_imumk_course_267716","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"72","extId":"Physicon_IMUMK_Course_267717","courseHash":"2295323957139112130191161445678243281341654319043175","title":"Рабочая тетрадь. Физика, 9 класс","grade":"9","genre":"Рабочая тетрадь","subject":"Физика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_267717","progress":0,"description":"490 интерактивных заданий, \\n4 тематические контрольные работы","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/114","google_id":"ru.fizikon.physicon_imumk_course_267717","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4413","extId":"Physicon_IMUMK_Course_374048","courseHash":"252156152246255169108438235151172113123179255122107103217","title":"Тренажёр по подготовке к ЕГЭ-2019. Физика","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"Физика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_374048","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9021","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"134","extId":"Physicon_IMUMK_Course_308048","courseHash":"10515610124286243982397125421526132105791281073317179","title":"Задачник. Физика: оптика, 10-11 классы","grade":"10;11","genre":"Задачник","subject":"Физика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_308048","progress":0,"description":"","status":"","price":600,"shopUrl":"https://multiring.ru/shop/details/2069","google_id":"ru.fizikon.physicon_imumk_course_308048","winstore_id":"","isNew":false,"priceBonus":3000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"132","extId":"Physicon_IMUMK_Course_307641","courseHash":"16065742018356209611724612193119802557320211694128","title":"Задачник. Физика: квантовая физика, 10-11 класс","grade":"10;11","genre":"Задачник","subject":"Физика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_307641","progress":0,"description":"540 интерактивных заданий, 6 тематических контрольных работ","status":"","price":600,"shopUrl":"https://multiring.ru/shop/details/236","google_id":"ru.fizikon.physicon_imumk_course_307641","winstore_id":"","isNew":false,"priceBonus":3000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"133","extId":"Physicon_IMUMK_Course_307642","courseHash":"24872254101239741372257721690108701011271747167203","title":"Задачник. Физика: Термодинамика и МКТ, 10–11 класс","grade":"10;11","genre":"Задачник","subject":"Физика","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_307642","progress":0,"description":"450 интерактивных заданий, 6 тематических контрольных работ","status":"","price":600,"shopUrl":"https://multiring.ru/shop/details/237","google_id":"ru.fizikon.physicon_imumk_course_307642","winstore_id":"","isNew":false,"priceBonus":3000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"60","extId":"Physicon_IMUMK_Course_267718","courseHash":"181691851282283030981562181642321462121912291021325584","title":"Рабочая тетрадь. Химия, 8 класс","grade":"8","genre":"Рабочая тетрадь","subject":"Химия","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267718","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-89","google_id":"ru.fizikon.physicon_imumk_course_267718","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"59","extId":"Physicon_IMUMK_Course_267719","courseHash":"20616722216315211623551149209236477579215291436167195","title":"Рабочая тетрадь. Химия, 9 класс","grade":"9","genre":"Рабочая тетрадь","subject":"Химия","itunes_id":"ru.physicon.imumk.WB.Physicon_IMUMK2_Course_267719","progress":0,"description":"","status":"free","price":400,"shopUrl":"https://multiring.ru/shop/details/-90","google_id":"ru.fizikon.physicon_imumk_course_267719","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4414","extId":"Physicon_IMUMK_Course_374092","courseHash":"3555133221229223481402451541024732877109118206182","title":"Тренажёр по подготовке к ЕГЭ-2019. Химия","grade":"10;11","genre":"Подготовка к ЕГЭ","subject":"Химия","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_374092","progress":0,"description":"","status":"free","price":600,"shopUrl":"https://multiring.ru/shop/details/9022","google_id":"","winstore_id":"","isNew":false,"priceBonus":5000,"lang":"ru","size":0,"requireUpdate":false},{"courseId":"4712","extId":"Physicon_IMUMK_Course_375064","courseHash":"20360148111281161343736197190114248893619524956254167","title":"Тренажёр по подготовке к ВПР-2019. Химия","grade":"11","genre":"Подготовка к ВПР","subject":"Химия","itunes_id":"ru.physicon.imumk.Physicon_IMUMK_Course_375064","progress":0,"description":"","status":"","price":400,"shopUrl":"https://multiring.ru/shop/details/9027","google_id":"","winstore_id":"","isNew":false,"priceBonus":6000,"lang":"ru","size":0,"requireUpdate":false}],"result":"Ok","errorMessage":null}';
        const courses = JSON.parse(responce);
        dispatch(addCourses(courses.items));
    };
}


function addCourses(courses) {
    return {
        type: 'ADD_COURSES',
        payload: courses,
    }

}


export function setFindString(string){
    return {
        type: 'SET_FIND_STRING',
        payload: string,
    }
}


export function setFindSubject(string){
    return {
        type: 'SET_FIND_SUBJECT',
        payload: string,
    }
}


export function setFindGenre(string){
    return {
        type: 'SET_FIND_GENRE',
        payload: string,
    }
}


export function setFindGrade(string){
    return {
        type: 'SET_FIND_GRADE',
        payload: string,
    }
}


function doNothing() {
    return {
        type: 'NOTHING',
    }
}