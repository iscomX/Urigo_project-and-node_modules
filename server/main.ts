import { Profile } from './../imports/models';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages, Users } from '../imports/collections';
import { MessageType, Picture } from '../imports/models';

Meteor.startup(() => {

  if (Meteor.settings) {
    Object.assign(Accounts._options, Meteor.settings['accounts-phone']);
    SMS.twilio = Meteor.settings['twilio'];
  }

  if (Users.collection.find().count() > 0) { return; }
//--------> user start <--------//
//==============================User-A========================//
// url(/assets/chat-background.jpg);
  let picture = importPictureFromUrl({
                                      name: 'user-A.png',
                                      url: 'https://randomuser.me/api/portraits/women/2.jpg' 
                                     });

  Accounts.createUserWithPhone({
                             phone: '+212666000001',
                             profile: {
                                     name: 'person A',
                                     pictureId: picture._id
                                      }
                              });

//==============================User-B========================//
  picture = importPictureFromUrl({
    name: 'lego1.jpg',
    url: 'https://randomuser.me/api/portraits/lego/1.jpg'
  });

  Accounts.createUserWithPhone({
    phone: '+212666000002',
    profile: {
      name: 'person B',
      pictureId: picture._id
    }
  });

//==============================User-C========================//
  picture = importPictureFromUrl({
    name: 'woman1.jpg',
    url: 'https://randomuser.me/api/portraits/women/1.jpg'
  });

  Accounts.createUserWithPhone({
    phone: '+212666000003',
    profile: {
      name: 'person C',
      pictureId: picture._id
    }
  });

//==============================User-D========================//
  picture = importPictureFromUrl({
    name: 'woman2.jpg',
    url: 'https://randomuser.me/api/portraits/women/2.jpg'
  });

  Accounts.createUserWithPhone({
    phone: '+212666000004',
    profile: {
      name: 'person D',
      pictureId: picture._id
    }
  });
//==============================User-E========================//
  picture = importPictureFromUrl({
    name: 'man2.jpg',
    url: 'https://randomuser.me/api/portraits/men/2.jpg'
  });

  Accounts.createUserWithPhone({
    phone: '+212666000005',
    profile: {
      name: 'person E',
      pictureId: picture._id
    }
    });
  });

//==============================================//
function importPictureFromUrl(options: { name: string, url: string }): 
     Picture { const description = { name: options.name };
     return Meteor.call('ufsImportURL', options.url, description, 'pictures');
}

//==============================================//
