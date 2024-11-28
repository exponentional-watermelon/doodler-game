const words = [
    {
        'rus': 'авианосец',
        'eng': 'aircraft carrier'
    },
    {
        'rus': 'самолет',
        'eng': 'airplane'
    },
    {
        'rus': 'будильник',
        'eng': 'alarm clock'
    },
    {
        'rus': 'скорая помощь',
        'eng': 'ambulance'
    },
    {
        'rus': 'ангел',
        'eng': 'angel'
    },
    {
        'rus': 'миграция животных',
        'eng': 'animal migration'
    },
    {
        'rus': 'муравей',
        'eng': 'ant'
    },
    {
        'rus': 'наковальня',
        'eng': 'anvil'
    },
    {
        'rus': 'яблоко',
        'eng': 'apple'
    },
    {
        'rus': 'рука',
        'eng': 'arm'
    },
    {
        'rus': 'спаржа',
        'eng': 'asparagus'
    },
    {
        'rus': 'топор',
        'eng': 'axe'
    },
    {
        'rus': 'рюкзак',
        'eng': 'backpack'
    },
    {
        'rus': 'банан',
        'eng': 'banana'
    },
    {
        'rus': 'бинт',
        'eng': 'bandage'
    },
    {
        'rus': 'амбар',
        'eng': 'barn'
    },
    {
        'rus': 'бейсбольная бита',
        'eng': 'baseball bat'
    },
    {
        'rus': 'бейсбол',
        'eng': 'baseball'
    },
    {
        'rus': 'корзина',
        'eng': 'basket'
    },
    {
        'rus': 'баскетбол',
        'eng': 'basketball'
    },
    {
        'rus': 'бита',
        'eng': 'bat'
    },
    {
        'rus': 'ванна',
        'eng': 'bathtub'
    },
    {
        'rus': 'пляж',
        'eng': 'beach'
    },
    {
        'rus': 'медведь',
        'eng': 'bear'
    },
    {
        'rus': 'борода',
        'eng': 'beard'
    },
    {
        'rus': 'кровать',
        'eng': 'bed'
    },
    {
        'rus': 'пчела',
        'eng': 'bee'
    },
    {
        'rus': 'ремень',
        'eng': 'belt'
    },
    {
        'rus': 'скамейка',
        'eng': 'bench'
    },
    {
        'rus': 'велосипед',
        'eng': 'bicycle'
    },
    {
        'rus': 'бинокль',
        'eng': 'binoculars'
    },
    {
        'rus': 'птица',
        'eng': 'bird'
    },
    {
        'rus': 'праздничный торт',
        'eng': 'birthday cake'
    },
    {
        'rus': 'ежевика',
        'eng': 'blackberry'
    },
    {
        'rus': 'черника',
        'eng': 'blueberry'
    },
    {
        'rus': 'книга',
        'eng': 'book'
    },
    {
        'rus': 'бумеранг',
        'eng': 'boomerang'
    },
    {
        'rus': 'крышка от бутылки',
        'eng': 'bottlecap'
    },
    {
        'rus': 'галстук-бабочка',
        'eng': 'bowtie'
    },
    {
        'rus': 'браслет',
        'eng': 'bracelet'
    },
    {
        'rus': 'мозг',
        'eng': 'brain'
    },
    {
        'rus': 'хлеб',
        'eng': 'bread'
    },
    {
        'rus': 'мост',
        'eng': 'bridge'
    },
    {
        'rus': 'брокколи',
        'eng': 'broccoli'
    },
    {
        'rus': 'метла',
        'eng': 'broom'
    },
    {
        'rus': 'ведро',
        'eng': 'bucket'
    },
    {
        'rus': 'бульдозер',
        'eng': 'bulldozer'
    },
    {
        'rus': 'автобус',
        'eng': 'bus'
    },
    {
        'rus': 'куст',
        'eng': 'bush'
    },
    {
        'rus': 'бабочка',
        'eng': 'butterfly'
    },
    {
        'rus': 'кактус',
        'eng': 'cactus'
    },
    {
        'rus': 'торт',
        'eng': 'cake'
    },
    {
        'rus': 'калькулятор',
        'eng': 'calculator'
    },
    {
        'rus': 'календарь',
        'eng': 'calendar'
    },
    {
        'rus': 'верблюд',
        'eng': 'camel'
    },
    {
        'rus': 'камера',
        'eng': 'camera'
    },
    {
        'rus': 'камуфляж',
        'eng': 'camouflage'
    },
    {
        'rus': 'костер',
        'eng': 'campfire'
    },
    {
        'rus': 'свеча',
        'eng': 'candle'
    },
    {
        'rus': 'пушка',
        'eng': 'cannon'
    },
    {
        'rus': 'каноэ',
        'eng': 'canoe'
    },
    {
        'rus': 'машина',
        'eng': 'car'
    },
    {
        'rus': 'морковь',
        'eng': 'carrot'
    },
    {
        'rus': 'замок',
        'eng': 'castle'
    },
    {
        'rus': 'кошка',
        'eng': 'cat'
    },
    {
        'rus': 'вентилятор',
        'eng': 'ceiling fan'
    },
    {
        'rus': 'сотовый телефон',
        'eng': 'cell phone'
    },
    {
        'rus': 'виолончель',
        'eng': 'cello'
    },
    {
        'rus': 'стул',
        'eng': 'chair'
    },
    {
        'rus': 'люстра',
        'eng': 'chandelier'
    },
    {
        'rus': 'церковь',
        'eng': 'church'
    },
    {
        'rus': 'круг',
        'eng': 'circle'
    },
    {
        'rus': 'кларнет',
        'eng': 'clarinet'
    },
    {
        'rus': 'часы',
        'eng': 'clock'
    },
    {
        'rus': 'облако',
        'eng': 'cloud'
    },
    {
        'rus': 'чашка кофе',
        'eng': 'coffee cup'
    },
    {
        'rus': 'компас',
        'eng': 'compass'
    },
    {
        'rus': 'компьютер',
        'eng': 'computer'
    },
    {
        'rus': 'печенье',
        'eng': 'cookie'
    },
    {
        'rus': 'холодильник',
        'eng': 'cooler'
    },
    {
        'rus': 'диван',
        'eng': 'couch'
    },
    {
        'rus': 'корова',
        'eng': 'cow'
    },
    {
        'rus': 'краб',
        'eng': 'crab'
    },
    {
        'rus': 'мелок',
        'eng': 'crayon'
    },
    {
        'rus': 'крокодил',
        'eng': 'crocodile'
    },
    {
        'rus': 'корона',
        'eng': 'crown'
    },
    {
        'rus': 'круизный лайнер',
        'eng': 'cruise ship'
    },
    {
        'rus': 'чашка',
        'eng': 'cup'
    },
    {
        'rus': 'бриллиант',
        'eng': 'diamond'
    },
    {
        'rus': 'посудомоечная машина',
        'eng': 'dishwasher'
    },
    {
        'rus': 'трамплин для прыжков в воду',
        'eng': 'diving board'
    },
    {
        'rus': 'собака',
        'eng': 'dog'
    },
    {
        'rus': 'дельфин',
        'eng': 'dolphin'
    },
    {
        'rus': 'пончик',
        'eng': 'donut'
    },
    {
        'rus': 'дверь',
        'eng': 'door'
    },
    {
        'rus': 'дракон',
        'eng': 'dragon'
    },
    {
        'rus': 'комод',
        'eng': 'dresser'
    },
    {
        'rus': 'дрель',
        'eng': 'drill'
    },
    {
        'rus': 'барабаны',
        'eng': 'drums'
    },
    {
        'rus': 'утка',
        'eng': 'duck'
    },
    {
        'rus': 'гантель',
        'eng': 'dumbbell'
    },
    {
        'rus': 'ухо',
        'eng': 'ear'
    },
    {
        'rus': 'локоть',
        'eng': 'elbow'
    },
    {
        'rus': 'слон',
        'eng': 'elephant'
    },
    {
        'rus': 'конверт',
        'eng': 'envelope'
    },
    {
        'rus': 'ластик',
        'eng': 'eraser'
    },
    {
        'rus': 'глаз',
        'eng': 'eye'
    },
    {
        'rus': 'очки',
        'eng': 'eyeglasses'
    },
    {
        'rus': 'лицо',
        'eng': 'face'
    },
    {
        'rus': 'веер',
        'eng': 'fan'
    },
    {
        'rus': 'перо',
        'eng': 'feather'
    },
    {
        'rus': 'забор',
        'eng': 'fence'
    },
    {
        'rus': 'палец',
        'eng': 'finger'
    },
    {
        'rus': 'пожарный гидрант',
        'eng': 'fire hydrant'
    },
    {
        'rus': 'камин',
        'eng': 'fireplace'
    },
    {
        'rus': 'пожарная машина',
        'eng': 'firetruck'
    },
    {
        'rus': 'рыба',
        'eng': 'fish'
    },
    {
        'rus': 'фламинго',
        'eng': 'flamingo'
    },
    {
        'rus': 'фонарик',
        'eng': 'flashlight'
    },
    {
        'rus': 'шлепки',
        'eng': 'flip flops'
    },
    {
        'rus': 'торшер',
        'eng': 'floor lamp'
    },
    {
        'rus': 'цветок',
        'eng': 'flower'
    },
    {
        'rus': 'летающая тарелка',
        'eng': 'flying saucer'
    },
    {
        'rus': 'нога',
        'eng': 'foot'
    },
    {
        'rus': 'вилка',
        'eng': 'fork'
    },
    {
        'rus': 'лягушка',
        'eng': 'frog'
    },
    {
        'rus': 'сковорода',
        'eng': 'frying pan'
    },
    {
        'rus': 'садовый шланг',
        'eng': 'garden hose'
    },
    {
        'rus': 'сад',
        'eng': 'garden'
    },
    {
        'rus': 'жираф',
        'eng': 'giraffe'
    },
    {
        'rus': 'козлиная бородка',
        'eng': 'goatee'
    },
    {
        'rus': 'гольф клуб',
        'eng': 'golf club'
    },
    {
        'rus': 'виноград',
        'eng': 'grapes'
    },
    {
        'rus': 'трава',
        'eng': 'grass'
    },
    {
        'rus': 'гитара',
        'eng': 'guitar'
    },
    {
        'rus': 'гамбургер',
        'eng': 'hamburger'
    },
    {
        'rus': 'молоток',
        'eng': 'hammer'
    },
    {
        'rus': 'рука',
        'eng': 'hand'
    },
    {
        'rus': 'арфа',
        'eng': 'harp'
    },
    {
        'rus': 'шляпа',
        'eng': 'hat'
    },
    {
        'rus': 'наушники',
        'eng': 'headphones'
    },
    {
        'rus': 'ёж',
        'eng': 'hedgehog'
    },
    {
        'rus': 'вертолёт',
        'eng': 'helicopter'
    },
    {
        'rus': 'шлем',
        'eng': 'helmet'
    },
    {
        'rus': 'шестиугольник',
        'eng': 'hexagon'
    },
    {
        'rus': 'хоккейная шайба',
        'eng': 'hockey puck'
    },
    {
        'rus': 'хоккейная клюшка',
        'eng': 'hockey stick'
    },
    {
        'rus': 'лошадь',
        'eng': 'horse'
    },
    {
        'rus': 'больница',
        'eng': 'hospital'
    },
    {
        'rus': 'воздушный шар',
        'eng': 'hot air balloon'
    },
    {
        'rus': 'хот-дог',
        'eng': 'hot dog'
    },
    {
        'rus': 'джакузи',
        'eng': 'hot tub'
    },
    {
        'rus': 'песочные часы',
        'eng': 'hourglass'
    },
    {
        'rus': 'комнатное растение',
        'eng': 'house plant'
    },
    {
        'rus': 'дом',
        'eng': 'house'
    },
    {
        'rus': 'ураган',
        'eng': 'hurricane'
    },
    {
        'rus': 'мороженое',
        'eng': 'ice cream'
    },
    {
        'rus': 'куртка',
        'eng': 'jacket'
    },
    {
        'rus': 'тюрьма',
        'eng': 'jail'
    },
    {
        'rus': 'кенгуру',
        'eng': 'kangaroo'
    },
    {
        'rus': 'ключ',
        'eng': 'key'
    },
    {
        'rus': 'клавиатура',
        'eng': 'keyboard'
    },
    {
        'rus': 'колено',
        'eng': 'knee'
    },
    {
        'rus': 'нож',
        'eng': 'knife'
    },
    {
        'rus': 'лестница',
        'eng': 'ladder'
    },
    {
        'rus': 'фонарь',
        'eng': 'lantern'
    },
    {
        'rus': 'ноутбук',
        'eng': 'laptop'
    },
    {
        'rus': 'лист',
        'eng': 'leaf'
    },
    {
        'rus': 'нога',
        'eng': 'leg'
    },
    {
        'rus': 'лампочка',
        'eng': 'light bulb'
    },
    {
        'rus': 'зажигалка',
        'eng': 'lighter'
    },
    {
        'rus': 'маяк',
        'eng': 'lighthouse'
    },
    {
        'rus': 'молния',
        'eng': 'lightning'
    },
    {
        'rus': 'линия',
        'eng': 'line'
    },
    {
        'rus': 'лев',
        'eng': 'lion'
    },
    {
        'rus': 'помада',
        'eng': 'lipstick'
    },
    {
        'rus': 'лобстер',
        'eng': 'lobster'
    },
    {
        'rus': 'леденец',
        'eng': 'lollipop'
    },
    {
        'rus': 'почтовый ящик',
        'eng': 'mailbox'
    },
    {
        'rus': 'карта',
        'eng': 'map'
    },
    {
        'rus': 'маркер',
        'eng': 'marker'
    },
    {
        'rus': 'спички',
        'eng': 'matches'
    },
    {
        'rus': 'мегафон',
        'eng': 'megaphone'
    },
    {
        'rus': 'русалка',
        'eng': 'mermaid'
    },
    {
        'rus': 'микрофон',
        'eng': 'microphone'
    },
    {
        'rus': 'микроволновка',
        'eng': 'microwave'
    },
    {
        'rus': 'обезьяна',
        'eng': 'monkey'
    },
    {
        'rus': 'луна',
        'eng': 'moon'
    },
    {
        'rus': 'комар',
        'eng': 'mosquito'
    },
    {
        'rus': 'мотоцикл',
        'eng': 'motorbike'
    },
    {
        'rus': 'гора',
        'eng': 'mountain'
    },
    {
        'rus': 'мышь',
        'eng': 'mouse'
    },
    {
        'rus': 'усы',
        'eng': 'moustache'
    },
    {
        'rus': 'рот',
        'eng': 'mouth'
    },
    {
        'rus': 'кружка',
        'eng': 'mug'
    },
    {
        'rus': 'гриб',
        'eng': 'mushroom'
    },
    {
        'rus': 'ноготь',
        'eng': 'nail'
    },
    {
        'rus': 'ожерелье',
        'eng': 'necklace'
    },
    {
        'rus': 'нос',
        'eng': 'nose'
    },
    {
        'rus': 'океан',
        'eng': 'ocean'
    },
    {
        'rus': 'восьмиугольник',
        'eng': 'octagon'
    },
    {
        'rus': 'осьминог',
        'eng': 'octopus'
    },
    {
        'rus': 'лук',
        'eng': 'onion'
    },
    {
        'rus': 'духовка',
        'eng': 'oven'
    },
    {
        'rus': 'сова',
        'eng': 'owl'
    },
    {
        'rus': 'банка краски',
        'eng': 'paint can'
    },
    {
        'rus': 'кисть',
        'eng': 'paintbrush'
    },
    {
        'rus': 'пальма',
        'eng': 'palm tree'
    },
    {
        'rus': 'панда',
        'eng': 'panda'
    },
    {
        'rus': 'брюки',
        'eng': 'pants'
    },
    {
        'rus': 'скрепка',
        'eng': 'paper clip'
    },
    {
        'rus': 'парашют',
        'eng': 'parachute'
    },
    {
        'rus': 'попугай',
        'eng': 'parrot'
    },
    {
        'rus': 'паспорт',
        'eng': 'passport'
    },
    {
        'rus': 'арахис',
        'eng': 'peanut'
    },
    {
        'rus': 'груша',
        'eng': 'pear'
    },
    {
        'rus': 'горошек',
        'eng': 'peas'
    },
    {
        'rus': 'карандаш',
        'eng': 'pencil'
    },
    {
        'rus': 'пингвин',
        'eng': 'penguin'
    },
    {
        'rus': 'пианино',
        'eng': 'piano'
    },
    {
        'rus': 'пикап',
        'eng': 'pickup truck'
    },
    {
        'rus': 'рамка для фотографий',
        'eng': 'picture frame'
    },
    {
        'rus': 'свинья',
        'eng': 'pig'
    },
    {
        'rus': 'подушка',
        'eng': 'pillow'
    },
    {
        'rus': 'ананас',
        'eng': 'pineapple'
    },
    {
        'rus': 'пицца',
        'eng': 'pizza'
    },
    {
        'rus': 'плоскогубцы',
        'eng': 'pliers'
    },
    {
        'rus': 'полицейская машина',
        'eng': 'police car'
    },
    {
        'rus': 'пруд',
        'eng': 'pond'
    },
    {
        'rus': 'бассейн',
        'eng': 'pool'
    },
    {
        'rus': 'эскимо',
        'eng': 'popsicle'
    },
    {
        'rus': 'открытка',
        'eng': 'postcard'
    },
    {
        'rus': 'картошка',
        'eng': 'potato'
    },
    {
        'rus': 'розетка',
        'eng': 'power outlet'
    },
    {
        'rus': 'кошелек',
        'eng': 'purse'
    },
    {
        'rus': 'кролик',
        'eng': 'rabbit'
    },
    {
        'rus': 'енот',
        'eng': 'raccoon'
    },
    {
        'rus': 'радио',
        'eng': 'radio'
    },
    {
        'rus': 'дождь',
        'eng': 'rain'
    },
    {
        'rus': 'радуга',
        'eng': 'rainbow'
    },
    {
        'rus': 'грабли',
        'eng': 'rake'
    },
    {
        'rus': 'пульт',
        'eng': 'remote control'
    },
    {
        'rus': 'носорог',
        'eng': 'rhinoceros'
    },
    {
        'rus': 'винтовка',
        'eng': 'rifle'
    },
    {
        'rus': 'река',
        'eng': 'river'
    },
    {
        'rus': 'американские горки',
        'eng': 'roller coaster'
    },
    {
        'rus': 'роликовые коньки',
        'eng': 'rollerskates'
    },
    {
        'rus': 'парусник',
        'eng': 'sailboat'
    },
    {
        'rus': 'сэндвич',
        'eng': 'sandwich'
    },
    {
        'rus': 'пила',
        'eng': 'saw'
    },
    {
        'rus': 'саксофон',
        'eng': 'saxophone'
    },
    {
        'rus': 'школьный автобус',
        'eng': 'school bus'
    },
    {
        'rus': 'ножницы',
        'eng': 'scissors'
    },
    {
        'rus': 'скорпион',
        'eng': 'scorpion'
    },
    {
        'rus': 'отвертка',
        'eng': 'screwdriver'
    },
    {
        'rus': 'морская черепаха',
        'eng': 'sea turtle'
    },
    {
        'rus': 'морская пила',
        'eng': 'see saw'
    },
    {
        'rus': 'акула',
        'eng': 'shark'
    },
    {
        'rus': 'овца',
        'eng': 'sheep'
    },
    {
        'rus': 'обувь',
        'eng': 'shoe'
    },
    {
        'rus': 'шорты',
        'eng': 'shorts'
    },
    {
        'rus': 'лопата',
        'eng': 'shovel'
    },
    {
        'rus': 'раковина',
        'eng': 'sink'
    },
    {
        'rus': 'скейтборд',
        'eng': 'skateboard'
    },
    {
        'rus': 'череп',
        'eng': 'skull'
    },
    {
        'rus': 'небоскреб',
        'eng': 'skyscraper'
    },
    {
        'rus': 'спальный мешок',
        'eng': 'sleeping bag'
    },
    {
        'rus': 'смайлик',
        'eng': 'smiley face'
    },
    {
        'rus': 'улитка',
        'eng': 'snail'
    },
    {
        'rus': 'змея',
        'eng': 'snake'
    },
    {
        'rus': 'трубка',
        'eng': 'snorkel'
    },
    {
        'rus': 'снежинка',
        'eng': 'snowflake'
    },
    {
        'rus': 'снеговик',
        'eng': 'snowman'
    },
    {
        'rus': 'футбольный мяч',
        'eng': 'soccer ball'
    },
    {
        'rus': 'носок',
        'eng': 'sock'
    },
    {
        'rus': 'катер',
        'eng': 'speedboat'
    },
    {
        'rus': 'паук',
        'eng': 'spider'
    },
    {
        'rus': 'ложка',
        'eng': 'spoon'
    },
    {
        'rus': 'электронная таблица',
        'eng': 'spreadsheet'
    },
    {
        'rus': 'квадрат',
        'eng': 'square'
    },
    {
        'rus': 'закорючка',
        'eng': 'squiggle'
    },
    {
        'rus': 'белка',
        'eng': 'squirrel'
    },
    {
        'rus': 'лестница',
        'eng': 'stairs'
    },
    {
        'rus': 'звезда',
        'eng': 'star'
    },
    {
        'rus': 'стейк',
        'eng': 'steak'
    },
    {
        'rus': 'стерео',
        'eng': 'stereo'
    },
    {
        'rus': 'стетоскоп',
        'eng': 'stethoscope'
    },
    {
        'rus': 'стежки',
        'eng': 'stitches'
    },
    {
        'rus': 'стоп-знак',
        'eng': 'stop sign'
    },
    {
        'rus': 'плита',
        'eng': 'stove'
    },
    {
        'rus': 'клубника',
        'eng': 'strawberry'
    },
    {
        'rus': 'уличный фонарь',
        'eng': 'streetlight'
    },
    {
        'rus': 'фасоль',
        'eng': 'string bean'
    },
    {
        'rus': 'подводная лодка',
        'eng': 'submarine'
    },
    {
        'rus': 'чемодан',
        'eng': 'suitcase'
    },
    {
        'rus': 'солнце',
        'eng': 'sun'
    },
    {
        'rus': 'лебедь',
        'eng': 'swan'
    },
    {
        'rus': 'свитер',
        'eng': 'sweater'
    },
    {
        'rus': 'качели',
        'eng': 'swing set'
    },
    {
        'rus': 'меч',
        'eng': 'sword'
    },
    {
        'rus': 'шприц',
        'eng': 'syringe'
    },
    {
        'rus': 'футболка',
        'eng': 't-shirt'
    },
    {
        'rus': 'стол',
        'eng': 'table'
    },
    {
        'rus': 'чайник',
        'eng': 'teapot'
    },
    {
        'rus': 'плюшевый мишка',
        'eng': 'teddy-bear'
    },
    {
        'rus': 'телефон',
        'eng': 'telephone'
    },
    {
        'rus': 'телевизор',
        'eng': 'television'
    },
    {
        'rus': 'теннисная ракетка',
        'eng': 'tennis racquet'
    },
    {
        'rus': 'палатка',
        'eng': 'tent'
    },
    {
        'rus': 'Эйфелева башня',
        'eng': 'The Eiffel Tower'
    },
    {
        'rus': 'Великая Китайская стена',
        'eng': 'The Great Wall of China'
    },
    {
        'rus': 'Мона Лиза',
        'eng': 'The Mona Lisa'
    },
    {
        'rus': 'тигр',
        'eng': 'tiger'
    },
    {
        'rus': 'тостер',
        'eng': 'toaster'
    },
    {
        'rus': 'палец ноги',
        'eng': 'toe'
    },
    {
        'rus': 'туалет',
        'eng': 'toilet'
    },
    {
        'rus': 'зуб',
        'eng': 'tooth'
    },
    {
        'rus': 'зубная щетка',
        'eng': 'toothbrush'
    },
    {
        'rus': 'зубная паста',
        'eng': 'toothpaste'
    },
    {
        'rus': 'торнадо',
        'eng': 'tornado'
    },
    {
        'rus': 'трактор',
        'eng': 'tractor'
    },
    {
        'rus': 'светофор',
        'eng': 'traffic light'
    },
    {
        'rus': 'поезд',
        'eng': 'train'
    },
    {
        'rus': 'дерево',
        'eng': 'tree'
    },
    {
        'rus': 'треугольник',
        'eng': 'triangle'
    },
    {
        'rus': 'тромбон',
        'eng': 'trombone'
    },
    {
        'rus': 'грузовик',
        'eng': 'truck'
    },
    {
        'rus': 'труба',
        'eng': 'trumpet'
    },
    {
        'rus': 'зонт',
        'eng': 'umbrella'
    },
    {
        'rus': 'нижнее белье',
        'eng': 'underwear'
    },
    {
        'rus': 'фургон',
        'eng': 'van'
    },
    {
        'rus': 'ваза',
        'eng': 'vase'
    },
    {
        'rus': 'скрипка',
        'eng': 'violin'
    },
    {
        'rus': 'стиральная машина',
        'eng': 'washing machine'
    },
    {
        'rus': 'арбуз',
        'eng': 'watermelon'
    },
    {
        'rus': 'водная горка',
        'eng': 'waterslide'
    },
    {
        'rus': 'кит',
        'eng': 'whale'
    },
    {
        'rus': 'колесо',
        'eng': 'wheel'
    },
    {
        'rus': 'мельница',
        'eng': 'windmill'
    },
    {
        'rus': 'бутылка вина',
        'eng': 'wine bottle'
    },
    {
        'rus': 'бокал вина',
        'eng': 'wine glass'
    },
    {
        'rus': 'наручные часы',
        'eng': 'wristwatch'
    },
    {
        'rus': 'йога',
        'eng': 'yoga'
    },
    {
        'rus': 'зебра',
        'eng': 'zebra'
    },
    {
        'rus': 'зигзаг',
        'eng': 'zigzag'
    }
]

export function createRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}